package com.rushlance.backend.controller;

import com.rushlance.backend.model.Notifications;
import com.rushlance.backend.repo.NotificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class NotificationController {

    @Autowired
    NotificationRepo notificationRepo;

    @GetMapping("/notifications")
    public List<Notifications> getAllNotifications()
    {
        return this.notificationRepo.getAll();
    }


}
