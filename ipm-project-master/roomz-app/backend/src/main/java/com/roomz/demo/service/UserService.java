package com.roomz.demo.service;

import com.roomz.demo.dto.UserDTO;
import com.roomz.demo.dto.mappers.UserMapper;
import com.roomz.demo.entity.User;
import com.roomz.demo.exception.GeneralApiException;
import com.roomz.demo.exception.ResourceNotFoundException;
import com.roomz.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserMapper userMapper;
    private UserRepository userRepository;

    @Autowired
    public UserService(UserMapper userMapper, UserRepository userRepository) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }

    public UserDTO findUserById(int id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return userMapper.UserToDTO(user.get());
        } else {
            throw new ResourceNotFoundException("No such user found with ID: " + id);
        }
    }

    public UserDTO createUser(UserDTO userDTO) {
        User user = userMapper.DTOToUser(userDTO);
        if (userRepository.findById(user.getId()).isPresent()) {
            throw new GeneralApiException("A user already exists with ID: " + user.getId());
        } else {
            User userSaved = userRepository.save(user);
            return userMapper.UserToDTO(userSaved);
        }
    }

    public void deleteUser(int id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.delete(user.get());
        } else {
            throw new ResourceNotFoundException("No such user with ID: " + id);
        }
    }
}
