package com.rushlance.backend.controller;

import com.rushlance.backend.model.*;
import com.rushlance.backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @PostMapping("/user")
    public Users getUserDetailsByEmail(@RequestBody Map<String, Object> email)
    {
        String email_str = (String) email.get("email");
        System.out.println(email_str);
        return this.userRepo.findByEmail(email_str);
    }

    @PostMapping("/userID")
    public Map<String, Object> getUserDetailsById(@RequestBody Map<String, Object> id)
    {
        Integer userID = (Integer) id.get("id");
        return this.userRepo.userIdDetails(userID);
    }
}