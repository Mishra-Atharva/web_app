package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Users
{
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "email")
    @JsonProperty("email")
    private String email;

    @JsonProperty("password_hash")
    private String password_hash;

    @Column(name = "user_type")
    @JsonProperty("user_type")
    private String user_type;

    @Column(name = "full_name")
    @JsonProperty("full_name")
    private String full_name;

    @Column(name = "created_at")
    @JsonProperty("created_at")
    private LocalDate created_at;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public LocalDate getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDate created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password_hash='" + password_hash + '\'' +
                ", user_type='" + user_type + '\'' +
                ", full_name='" + full_name + '\'' +
                ", created_at=" + created_at +
                '}';
    }
}