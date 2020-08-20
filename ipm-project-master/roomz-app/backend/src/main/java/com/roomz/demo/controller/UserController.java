package com.roomz.demo.controller;

import com.roomz.demo.dto.UserDTO;
import com.roomz.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("roomz-api/user-api")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users/{id}")
    public UserDTO findUserById(@PathVariable int id) {
        return userService.findUserById(id);
    }

    @PostMapping("/users")
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.createUser(userDTO);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}
