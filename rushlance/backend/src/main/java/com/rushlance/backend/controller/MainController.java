package com.rushlance.backend.controller;

import backend.Database;
import com.rushlance.backend.model.*;
import com.rushlance.backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
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