package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "booking_id")
    @JsonProperty("booking_id")
    private int booking_id;

    @Column(name = "freelancer_id")
    @JsonProperty("freelancer_id")
    private int freelancer_id;

    @Column(name = "client_id")
    @JsonProperty("client_id")
    private int client_id;

    @Column(name = "service_id")
    @JsonProperty("service_id")
    private int service_id;

    @Column(name = "amount")
    @JsonProperty("amount")
    private double amount;

    @Column(name = "platform_fee")
    @JsonProperty("platform_fee")
    private double platform_fee;

    @Column(name = "freelancer_earnings")
    @JsonProperty("freelancer_earnings")
    private double freelancer_earnings;

    @Column(name = "transaction_date")
    @JsonProperty("transaction_date")
    private LocalDate transaction_date;

    @Column(name = "payment_status")
    @JsonProperty("payment_status")
    private String payment_status;

    @Column(name = "payment_method")
    @JsonProperty("payment_method")
    private String payment_method;

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

    public int getFreelancer_id() {
        return freelancer_id;
    }

    public void setFreelancer_id(int freelancer_id) {
        this.freelancer_id = freelancer_id;
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

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getPlatform_fee() {
        return platform_fee;
    }

    public void setPlatform_fee(double platform_fee) {
        this.platform_fee = platform_fee;
    }

    public double getFreelancer_earnings() {
        return freelancer_earnings;
    }

    public void setFreelancer_earnings(double freelancer_earnings) {
        this.freelancer_earnings = freelancer_earnings;
    }

    public LocalDate getTransaction_date() {
        return transaction_date;
    }

    public void setTransaction_date(LocalDate transaction_date) {
        this.transaction_date = transaction_date;
    }

    public String getPayment_status() {
        return payment_status;
    }

    public void setPayment_status(String payment_status) {
        this.payment_status = payment_status;
    }

    public String getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }

    @Override
    public String toString() {
        return "Transactions{" +
                "id=" + id +
                ", booking_id=" + booking_id +
                ", freelancer_id=" + freelancer_id +
                ", client_id=" + client_id +
                ", service_id=" + service_id +
                ", amount=" + amount +
                ", platform_fee=" + platform_fee +
                ", freelancer_earnings=" + freelancer_earnings +
                ", transaction_date=" + transaction_date +
                ", payment_status='" + payment_status + '\'' +
                ", payment_method='" + payment_method + '\'' +
                '}';
    }
}
