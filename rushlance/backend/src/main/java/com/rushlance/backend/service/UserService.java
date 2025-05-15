package com.rushlance.backend.service;

import com.rushlance.backend.model.Users;
import com.rushlance.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService
{

    @Autowired
    private UserRepo repo;

    public Users register(Users user)
    {
        return repo.save(user);
    }
}