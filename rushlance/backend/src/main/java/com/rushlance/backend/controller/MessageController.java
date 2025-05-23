package com.rushlance.backend.controller;

import com.rushlance.backend.model.Messages;
import com.rushlance.backend.repo.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageRepo messageRepo;

    @GetMapping("/messages")
    public List<Messages> getAllMessages()
    {
        return this.messageRepo.getAll();
    }
}
