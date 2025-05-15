package com.rushlance.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Booking
{
    @Id
    @Column(name = "booking_id")
    private int booking_id;

    @Column(name = "service_id")
    private int service_id;

    @Column(name = "client_id")
    private int client_id;

    @Column(name = "freelancer_id")
    private int freelancer_id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "status")
    private String status;

    public int getBooking_id() {
        return booking_id;
    }

    public int getService_id() {
        return service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public int getClient_id() {
        return client_id;
    }

    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }

    public int getFreelancer_id() {
        return freelancer_id;
    }

    public void setFreelancer_id(int freelancer_id) {
        this.freelancer_id = freelancer_id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "booking_id=" + booking_id +
                ", service_id=" + service_id +
                ", client_id=" + client_id +
                ", freelancer_id=" + freelancer_id +
                ", date=" + date +
                ", status='" + status + '\'' +
                '}';
    }
}
