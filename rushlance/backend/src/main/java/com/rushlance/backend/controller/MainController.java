package com.rushlance.backend.controller;

import backend.Database;
import com.rushlance.backend.model.*;
import com.rushlance.backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MainController {
    @Autowired
    private ServiceRepo s_repo;

    @Autowired
    private UserRepo u_repo;

    @Autowired
    private AddressRepo a_repo;

    @Autowired
    private BookingRepo b_repo;

    @Autowired
    private ApplicationRepo app_repo;

    @GetMapping("/users")
    public List<Users> get_users()
    {
        return this.u_repo.getAll();
    }

    @PostMapping("/user")
    public Map<String, Object> get_user(@RequestBody Map<String, Object> data)
    {
        String email = (String) data.get("email");
        System.out.println(email);
        return u_repo.find(email);
    }

    @PostMapping("/booking")
    public List<Booking> get_booking(@RequestBody Map<String, Object> data)
    {
        String email = (String) data.get("email");
        return this.b_repo.find(email);
    }

    @GetMapping("/service")
    public List<Service> showServices()
    {
        return this.s_repo.findAll();
    }

    @GetMapping("/application")
    public List<Application> get_task_application()
    {
        return this.app_repo.getAll();
    }

}