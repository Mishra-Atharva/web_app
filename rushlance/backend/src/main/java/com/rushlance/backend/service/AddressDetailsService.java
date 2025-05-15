package com.rushlance.backend.service;

import com.rushlance.backend.repo.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressDetailsService
{
    @Autowired
    AddressRepo addressRepo;
}
