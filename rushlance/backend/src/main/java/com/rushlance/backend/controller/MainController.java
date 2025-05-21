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
    public List<Map<String, Object>> get_user(@RequestBody Map<String, Object> data)
    {
        String email = (String) data.get("email");
        System.out.println(email);
        return u_repo.find(email);
    }

    @GetMapping("/address")
    public List<Address> get_address()
    {
        return this.a_repo.getAll();
    }

    @GetMapping("/booking")
    public List<Booking> get_active_task()
    {
        return this.b_repo.getAll();
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