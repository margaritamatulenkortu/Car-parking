package com.roomz.demo.dto.mappers;

import com.roomz.demo.dto.UserDTO;
import com.roomz.demo.entity.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public User DTOToUser(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setSurname(userDTO.getSurname());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPosition(userDTO.getPosition());
        user.setUserIsAdmin(userDTO.isAdmin());
        user.setImage(userDTO.getImage());
        user.setActive(userDTO.isActive());
        return user;
    }

    public UserDTO UserToDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setSurname(user.getSurname());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setPosition(user.getPosition());
        userDTO.setActive(user.isActive());
        userDTO.setImage(user.getImage());
        userDTO.setAdmin(user.isUserIsAdmin());
        return userDTO;
    }
}
