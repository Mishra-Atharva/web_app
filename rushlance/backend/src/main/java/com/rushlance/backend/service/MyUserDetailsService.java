package com.rushlance.backend.service;

import com.rushlance.backend.model.MyUserDetails;
import com.rushlance.backend.model.Users;
import com.rushlance.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService
{
    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        Users user = repo.findByEmail(email);

        if (user == null)
        {
            System.out.println("user not found");
            throw new UsernameNotFoundException("user not found");
        }

        return new MyUserDetails(user);
    }
}
