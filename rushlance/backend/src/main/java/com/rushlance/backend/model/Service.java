package com.rushlance.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Service
{
    @Id
    @Column(name = "service_id")
    private int serviceId;

    @Column(name = "freelancer_id")
    private int freelancerId;

    @Column(name = "service_title")
    private String serviceTitle;

    @Column(name = "service_detail")
    private String serviceDetail;

    @Column(name = "status")
    private String status;

    public int getServiceId()
    {
        return serviceId;
    }

    public int getFreelancerId() {
        return freelancerId;
    }

    public void setFreelancerId(int freelancerId) {
        this.freelancerId = freelancerId;
    }

    public String getServiceTitle() {
        return serviceTitle;
    }

    public void setServiceTitle(String serviceTitle) {
        this.serviceTitle = serviceTitle;
    }

    public String getServiceDetail() {
        return serviceDetail;
    }

    public void setServiceDetail(String serviceDetail) {
        this.serviceDetail = serviceDetail;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Service{" +
                "serviceId=" + serviceId +
                ", freelancerId=" + freelancerId +
                ", serviceTitle='" + serviceTitle + '\'' +
                ", serviceDetail='" + serviceDetail + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
