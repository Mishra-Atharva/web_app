package com.rushlance.backend.controller;

import com.rushlance.backend.model.Reviews;
import com.rushlance.backend.repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    @PostMapping("/reviews")
    public Reviews addReview(@RequestBody Reviews reviews) {
        return reviewRepo.save(reviews);
    }

    @GetMapping("/reviews")
    public List<Reviews> getAllReviews() {
        return this.reviewRepo.getAll();
    }

    @PostMapping("/reviewID")
    public List<Reviews> getReviewsById(@RequestBody Map<String, Object> id) {
        Integer reviewID = (Integer) id.get("id");
        return this.reviewRepo.getReviewsById(reviewID);
    }
}
