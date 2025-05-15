package com.rushlance.backend.service;

import com.rushlance.backend.repo.ServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceDetailsService
{
    @Autowired
    private ServiceRepo repo;

}
