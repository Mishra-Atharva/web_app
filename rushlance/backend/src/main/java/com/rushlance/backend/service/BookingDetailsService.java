package com.rushlance.backend.service;

import com.rushlance.backend.repo.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingDetailsService
{
    @Autowired
    BookingRepo bookingRepo;

}
