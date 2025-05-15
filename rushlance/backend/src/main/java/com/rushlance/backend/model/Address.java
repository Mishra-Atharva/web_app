package com.rushlance.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Address
{
    @Id
    @Column(name = "address_id")
    private int address_id;

    @Column(name = "user_id")
    private int user_id;

    @Column(name = "street_address")
    private String street_address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "postal_code")
    private String postal_code;

    @Column(name = "country")
    private String country;

    public int getAddress_id() {
        return address_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getStreet_address() {
        return street_address;
    }

    public void setStreet_address(String street_address) {
        this.street_address = street_address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(String postal_code) {
        this.postal_code = postal_code;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return "Address{" +
                "address_id=" + address_id +
                ", user_id=" + user_id +
                ", street_address='" + street_address + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", postal_code=" + postal_code +
                ", country='" + country + '\'' +
                '}';
    }
}
