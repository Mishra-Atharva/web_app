package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
public class Users
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "full_name")
    @JsonProperty("full_name")
    private String full_name;

    @Column(name = "gender")
    @JsonProperty("gender")
    private String gender;

    @Column(name = "date_of_birth")
    @JsonProperty("date_of_birth")
    private LocalDate date_of_birth;

    @Column(name = "email")
    @JsonProperty("email")
    private String email;

    @Column(name = "password_hash")
    @JsonProperty("password_hash")
    private String password_hash;

    @Column(name = "phone")
    @JsonProperty("phone")
    private String phone;

    @Column(name = "user_type")
    @JsonProperty("user_type")
    private String user_type;

    @Column(name = "created_at")
    @CreationTimestamp
    private OffsetDateTime created_at;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(LocalDate date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword_hash() {
        return password_hash;
    }

    public void setPassword_hash(String password_hash) {
        this.password_hash = password_hash;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }

    public OffsetDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(OffsetDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", full_name='" + full_name + '\'' +
                ", gender='" + gender + '\'' +
                ", date_of_birth=" + date_of_birth +
                ", email='" + email + '\'' +
                ", password_hash='" + password_hash + '\'' +
                ", phone='" + phone + '\'' +
                ", user_type='" + user_type + '\'' +
                ", created_at=" + created_at +
                '}';
    }
}