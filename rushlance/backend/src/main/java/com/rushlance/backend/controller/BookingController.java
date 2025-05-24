package com.rushlance.backend.controller;

import com.rushlance.backend.model.Booking;
import com.rushlance.backend.repo.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @PostMapping("/totalBookings")
    public List<Booking> getTotalBooking(@RequestBody Map<String, Object> email)
    {
        String email_str = (String) email.get("email");
        System.out.println(email_str);
        return this.bookingRepo.totalBookings(email_str);
    }
}
