package com.rushlance.backend.controller;

import com.rushlance.backend.model.Service;
import com.rushlance.backend.repo.ServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ServiceController {

    @Autowired
    private ServiceRepo serviceRepo;

    @GetMapping("/service")
    public List<Service> getAllServices()
    {
        return this.serviceRepo.getAll();
    }
}
