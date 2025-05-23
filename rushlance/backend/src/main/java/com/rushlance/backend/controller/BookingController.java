package com.rushlance.backend.controller;

import com.rushlance.backend.model.Booking;
import com.rushlance.backend.repo.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingRepo bookingRepo;

    @GetMapping("/bookings")
    public List<Booking> getAllBookings()
    {
        return this.bookingRepo.getAll();
    }
}
