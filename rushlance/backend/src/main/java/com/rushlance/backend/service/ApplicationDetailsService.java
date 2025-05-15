package com.rushlance.backend.service;

import com.rushlance.backend.repo.ApplicationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationDetailsService
{
    @Autowired
    ApplicationRepo applicationRepo;
}
