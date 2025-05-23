package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Reviews {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "booking_id")
    @JsonProperty("booking_id")
    private int booking_id;

    @Column(name = "reviewer_id")
    @JsonProperty("reviewer_id")
    private int reviewer_id;

    @Column(name = "rating")
    @JsonProperty("rating")
    private int rating;

    @Column(name = "comment")
    @JsonProperty("comment")
    private String comment;

    @Column(name = "created_at")
    @JsonProperty("created_at")
    private LocalDate created_at;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public int getReviewer_id() {
        return reviewer_id;
    }

    public void setReviewer_id(int reviewer_id) {
        this.reviewer_id = reviewer_id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDate getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDate created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "id=" + id +
                ", booking_id=" + booking_id +
                ", client_id=" + reviewer_id +
                ", rating=" + rating +
                ", comment='" + comment + '\'' +
                ", created_at=" + created_at +
                '}';
    }
}
