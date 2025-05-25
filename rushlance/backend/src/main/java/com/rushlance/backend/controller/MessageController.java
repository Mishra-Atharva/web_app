package com.rushlance.backend.controller;

import com.rushlance.backend.model.Messages;
import com.rushlance.backend.repo.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageRepo messageRepo;

    @PostMapping("/messages")
    public Messages addMessage(@RequestBody Messages messages) {
        return messageRepo.save(messages);
    }

    @GetMapping("/messages")
    public List<Messages> getAllMessages()
    {
        return this.messageRepo.getAll();
    }

    @PostMapping("/messageID")
    public List<Messages> getMessageById(@RequestBody Map<String, Object> id)
    {
        Integer bookingId = (Integer) id.get("id");
        return this.messageRepo.getByBookingId(bookingId);
    }
}
