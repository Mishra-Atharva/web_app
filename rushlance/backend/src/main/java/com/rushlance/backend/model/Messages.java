package com.rushlance.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Messages {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "sender_id")
    @JsonProperty("sender_id")
    private int sender_id;

    @Column(name = "receiver_id")
    @JsonProperty("receiver_id")
    private int receiver_id;

    @Column(name = "booking_id")
    @JsonProperty("booking_id")
    private int booking_id;

    @Column(name = "content")
    @JsonProperty("content")
    private String content;

    @Column(name = "sent_at")
    @JsonProperty("sent_at")
    private LocalDate sent_at;

    @Column(name = "is_read")
    @JsonProperty("is_read")
    private boolean is_read;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSender_id() {
        return sender_id;
    }

    public void setSender_id(int sender_id) {
        this.sender_id = sender_id;
    }

    public int getReceiver_id() {
        return receiver_id;
    }

    public void setReceiver_id(int receiver_id) {
        this.receiver_id = receiver_id;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getSent_at() {
        return sent_at;
    }

    public void setSent_at(LocalDate sent_at) {
        this.sent_at = sent_at;
    }

    public boolean getIs_read() {
        return is_read;
    }

    public void setIs_read(boolean is_read) {
        this.is_read = is_read;
    }

    @Override
    public String toString() {
        return "Messages{" +
                "id=" + id +
                ", sender_id=" + sender_id +
                ", receiver_id=" + receiver_id +
                ", booking_id=" + booking_id +
                ", content='" + content + '\'' +
                ", sent_at=" + sent_at +
                ", is_read=" + is_read +
                '}';
    }
}
