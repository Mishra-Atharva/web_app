package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

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
    @CreationTimestamp
    private OffsetDateTime created_at;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public OffsetDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(OffsetDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "id=" + id +
                ", booking_id=" + booking_id +
                ", reviewer_id=" + reviewer_id +
                ", rating=" + rating +
                ", comment='" + comment + '\'' +
                ", created_at=" + created_at +
                '}';
    }
}
