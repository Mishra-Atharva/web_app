package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
public class Bookings
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "client_id")
    @JsonProperty("client_id")
    private int client_id;

    @Column(name = "service_id")
    @JsonProperty("service_id")
    private int service_id;

    @Column(name = "freelancer_id")
    @JsonProperty("freelancer_id")
    private int freelancer_id;

    @Column(name = "status")
    @JsonProperty("status")
    private String status;

    @Column(name = "booked_at")
    @JsonProperty("booked_at")
    private LocalDate booked_at;

    @Column(name = "completed_at")
    @JsonProperty("completed_at")
    private LocalDate completed_at;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getClient_id() {
        return client_id;
    }

    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }

    public int getService_id() {
        return service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public int getFreelancer_id() {
        return freelancer_id;
    }

    public void setFreelancer_id(int freelancer_id) {
        this.freelancer_id = freelancer_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getBooked_at() {
        return booked_at;
    }

    public void setBooked_at(LocalDate booked_at) {
        this.booked_at = booked_at;
    }

    public LocalDate getCompleted_at() {
        return completed_at;
    }

    public void setCompleted_at(LocalDate completed_at) {
        this.completed_at = completed_at;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", client_id=" + client_id +
                ", service_id=" + service_id +
                ", freelancer_id=" + freelancer_id +
                ", status='" + status + '\'' +
                ", booked_at=" + booked_at +
                ", completed_at=" + completed_at +
                '}';
    }
}

