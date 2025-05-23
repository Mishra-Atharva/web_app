package com.rushlance.backend.controller;

import com.rushlance.backend.model.Reviews;
import com.rushlance.backend.repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    @GetMapping("/reviews")
    public List<Reviews> getAllReviews() {
        return this.reviewRepo.getAll();
    }
}
