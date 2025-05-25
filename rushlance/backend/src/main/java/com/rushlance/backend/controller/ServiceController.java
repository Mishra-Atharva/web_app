package com.rushlance.backend.controller;

import com.rushlance.backend.model.Service;
import com.rushlance.backend.repo.ServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ServiceController {

    @Autowired
    private ServiceRepo serviceRepo;

    @PostMapping("/service")
    public Service addService(@RequestBody Service service) {
        return serviceRepo.save(service);
    }

    @GetMapping("/service")
    public List<Service> getAllServices()
    {
        return this.serviceRepo.getAll();
    }
}
