package com.rushlance.backend.controller;

import com.rushlance.backend.model.Bookings;
import com.rushlance.backend.repo.BookingRepo;
import com.rushlance.backend.service.BookingDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class BookingController {

    private Bookings book;

    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private BookingDetailsService service;

    @PostMapping("/bookings")
    public Bookings addBooking(@RequestBody Bookings booking)
    {
        return this.service.register(booking);
    }

    @PostMapping("/updateBookings")
    public boolean updateBookings(@RequestBody Map<String, Object> details)
    {
        Integer id = (Integer) details.get("id");
        String status = (String) details.get("status");
        LocalDate completed_at = null;
        String completedAtObj = (String) details.get("completed_at");
        completed_at = LocalDate.parse(completedAtObj);
        return this.bookingRepo.updateBookings(id, status, completed_at);
    }

    @GetMapping("/bookings")
    public List<Bookings> getAllBookings()
    {
        return this.bookingRepo.getAll();
    }

    @PostMapping("/totalBookings")
    public List<Map<String, Object>> getTotalBooking(@RequestBody Map<String, Object> email)
    {
        String email_str = (String) email.get("email");
        return this.bookingRepo.totalBookings(email_str);
    }

    @PostMapping("/countBookings")
    public Map<String, Object> getCountBooking(@RequestBody Map<String, Object> email)
    {
        String email_str = (String) email.get("email");
        return this.bookingRepo.getCountBookings(email_str);
    }
}
