package com.rushlance.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Application
{
    @Id
    @Column(name = "application_id")
    private int application_id;

    @Column(name = "freelancer_id")
    private int freelancer_id;

    @Column(name = "service_title")
    private String service_title;

    @Column(name = "service_detail")
    private String service_detail;

    @Column(name = "status")
    private String status;

    @Column(name = "submission")
    private LocalDate submission;

    public int getApplication_id() {
        return application_id;
    }

    public int getFreelancer_id() {
        return freelancer_id;
    }

    public void setFreelancer_id(int freelancer_id) {
        this.freelancer_id = freelancer_id;
    }

    public String getService_title() {
        return service_title;
    }

    public void setService_title(String service_title) {
        this.service_title = service_title;
    }

    public String getService_detail() {
        return service_detail;
    }

    public void setService_detail(String service_detail) {
        this.service_detail = service_detail;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getSubmission() {
        return submission;
    }

    public void setSubmission(LocalDate submission) {
        this.submission = submission;
    }
}
