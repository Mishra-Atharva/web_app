package com.rushlance.backend.controller;

import com.rushlance.backend.model.*;
import com.rushlance.backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    private UserRepo userRepo;


    @GetMapping("/users")
    public List<Users> get_users()
    {
        return this.userRepo.getAll();
    }
}