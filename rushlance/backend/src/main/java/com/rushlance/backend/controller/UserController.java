package com.rushlance.backend.controller;

import com.rushlance.backend.model.Users;
import com.rushlance.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
    @Autowired
    private UserService service;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    @PostMapping("/signup")
    public Users register(@RequestBody Users user)
    {
        user.setPassword(encoder.encode(user.getPassword()));
        return service.register(user);
    }
}
