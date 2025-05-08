package com.rushlance.backend;

import backend.Database;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Map;

@RestController
public class Controller {

    private Database db;
    private Connection conn;

    public Controller() {
        this.db = new Database();
        this.conn = db.connect("postgres", "postgres", "root");
    }

    @GetMapping("/GET:USERS")
    public ArrayList<Map<String, Object>> get_users()
    {
        return this.db.getUsers(this.conn);
    }

    @GetMapping("/GET:ADDRESSES")
    public ArrayList<Map<String, Object>> get_address()
    {
        return this.db.getAddress(this.conn);
    }

    @GetMapping("/GET:BOOKING")
    public ArrayList<Map<String, Object>> get_active_task()
    {
        return this.db.getBooking(this.conn);
    }

    @GetMapping("/GET:SERVICE")
    public ArrayList<Map<String, Object>> get_archived_task()
    {
        return this.db.getService(this.conn);
    }

    @GetMapping("/GET:APPLICATION")
    public ArrayList<Map<String, Object>> get_task_application()
    {
        return this.db.getAddress(this.conn);
    }
}
