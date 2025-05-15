package com.rushlance.backend.service;

import com.rushlance.backend.model.Users;
import com.rushlance.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService
{

    @Autowired
    private UserRepo repo;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    JWTService jwtService;

    public Users register(Users user)
    {
        return repo.save(user);
    }

    public String verify(Users user)
    {
        Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

        if (auth.isAuthenticated())
        {
            return jwtService.generateToken(user.getEmail());
        }
        return "Fail";
    }
}