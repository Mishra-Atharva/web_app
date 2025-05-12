package backend;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Database
{
    public Connection connect(String dbname, String user, String pass)
    {
        Connection conn = null;

        try
        {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/"+ dbname, user, pass);

            if (conn != null)
            {
                System.out.println("[*] Connected to PostgreSQL database");
            }
            else
            {
                System.out.println("[!] Failed to connect to PostgreSQL database");
            }
        }
        catch (Exception e)
        {
            System.out.println(e);
        }

        return conn;
    }

    // Users
    public void insert_data_user(Connection conn, String first_name, String last_name, String email, String password, LocalDate date_of_birth, String phone, String user_type)
    {
        PreparedStatement stmt = null;

        try
        {
            String query = "INSERT INTO USERS(first_name, last_name, email, password, date_of_birth, phone, user_type) VALUES (?,?,?,?,?,?,?);";

            stmt = conn.prepareStatement(query);
            stmt.setString(1, first_name);
            stmt.setString(2, last_name);
            stmt.setString(3, email);
            stmt.setString(4, password);
            stmt.setDate(5, Date.valueOf(date_of_birth));
            stmt.setDate(6, Date.valueOf(phone));
            stmt.setString(7, user_type);

            int result = stmt.executeUpdate();
            if (result > 0)
            {
                System.out.println("[*] Inserting user data");
            }
            else
            {
                System.out.println("[!] Failed to insert user data");
            }
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    // Address
    public void insert_data_address(Connection conn, int user_id, String street_address, String city, String state, String postal_code, String country)
    {
        PreparedStatement stmt = null;

        try
        {
            String query = "INSERT INTO ADDRESSES(user_id, street_address, city, state, postal_code, country) VALUES (?,?,?,?,?,?);";
            stmt = conn.prepareStatement(query);
            stmt.setInt(1, user_id);
            stmt.setString(2, street_address);
            stmt.setString(3, city);
            stmt.setString(4, state);
            stmt.setString(5, postal_code);
            stmt.setString(6, country);

            int result = stmt.executeUpdate();
            if (result > 0)
            {
                System.out.println("[*] Inserting address data");
            }
            else
            {
                System.out.println("[!] Failed to add address data");
            }

        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    // Booking 
    public void insert_data_booking(Connection conn, int service_id, int client_id, int freelancer_id, LocalDate date, String status)
    {
        PreparedStatement stmt = null;

        try 
        {
            String query = "INSERT INTO BOOKING(service_id, client_id, freelancer_id, date, status) VALUES(?,?,?,?,?);";

            stmt = conn.prepareStatement(query);
            stmt.setInt(1, service_id);
            stmt.setInt(2, client_id);
            stmt.setInt(3, freelancer_id);
            stmt.setDate(4, Date.valueOf(date));
            stmt.setString(5, status);
            
            int result = stmt.executeUpdate();

            if (result > 0)
            {
                System.out.println("[*] Inserting booking data");
            }
            else
            {
                System.out.println("[!] Failed to add booking data");
            }

        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    // Service
    public void insert_data_service(Connection conn, int freelancer_id, int service_title, String service_detail, String status)
    {
        PreparedStatement stmt = null;

        try
        {
            String query = "INSERT INTO SERVICE(freelancer_id, service_title, service_detail, status) VALUES(?,?,?,?);";

            stmt = conn.prepareStatement(query);
            stmt.setInt(1, freelancer_id);
            stmt.setInt(2, service_title);
            stmt.setString(3, service_detail);
            stmt.setString(4, status);

            int result = stmt.executeUpdate();

            if (result > 0)
            {
                System.out.println("[*] Inserting service data");
            }
            else
            {
                System.out.println("[!] Failed to add service data");
            }

        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    // Application
    public void insert_data_application(Connection conn, int freelancer_id, int service_title, String service_detail, String status)
    {
        PreparedStatement stmt = null;

        try
        {
            String query = "INSERT INTO APPLICATION(freelancer_id, service_title, service_detail, status) VALUES(?,?,?,?);";
            stmt = conn.prepareStatement(query);

            stmt.setInt(1, freelancer_id);
            stmt.setInt(2, service_title);
            stmt.setString(3, service_detail);
            stmt.setString(4, status);

            int result = stmt.executeUpdate();

            if (result > 0)
            {
                System.out.println("[*] Inserting application data");
            }
            else
            {
                System.out.println("[!] Failed to insert application data");
            }
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    // Get all users
    public ArrayList<Map<String, Object>> getUsers(Connection conn)
    {
        ArrayList<Map<String, Object>> users = new ArrayList<Map<String, Object>>();
        Statement stmt = null;
        ResultSet rs = null;

        try
        {
            String query = "SELECT * FROM USERS";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);

            System.out.println("[*] Getting users data");
            while (rs.next())
            {
                Map<String, Object> user = new HashMap<>();
                user.put("user_id", rs.getString("user_id"));
                user.put("first_name", rs.getString("first_name"));
                user.put("last_name", rs.getString("last_name"));
                user.put("email", rs.getString("email"));
                user.put("password", rs.getString("password"));
                user.put("date_of_birth", rs.getString("date_of_birth"));
                user.put("phone", rs.getString("phone"));
                user.put("user_type", rs.getString("user_type"));

                users.add(user);
            }
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }

        return users;
    }

    //Get specific user
    public Map<String, Object> getUsers(Connection conn, String email)
    {
        Map<String, Object> user = null;
        Statement stmt = null;
        ResultSet rs = null;

        try
        {
            String query = "SELECT * FROM USERS WHERE email = '" + email + "'";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);

            user = new HashMap<>();
            user.put("email", rs.getString("email"));
            user.put("password", rs.getString("password"));
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }

        return user;
    }


    public ArrayList<Map<String, Object>> getAddress(Connection conn)
    {
        ArrayList<Map<String, Object>> addresses = new ArrayList<Map<String, Object>>();
        Statement stmt = null;
        ResultSet rs = null;

        try
        {
            String query = "SELECT * FROM ADDRESSES";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);

            System.out.println("[*] Getting address data");
            while (rs.next())
            {
                Map<String, Object> address = new HashMap<>();
                address.put("address_id", rs.getString("address_id"));
                address.put("user_id", rs.getString("user_id"));
                address.put("street_address", rs.getString("street_address"));
                address.put("city", rs.getString("city"));
                address.put("state", rs.getString("state"));
                address.put("postal_code", rs.getString("postal_code"));
                address.put("country", rs.getString("country"));

                addresses.add(address);
            }
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }

        return addresses;
    }

    public ArrayList<Map<String, Object>> getBooking(Connection conn)
    {
        ArrayList<Map<String, Object>> bookings = new ArrayList<Map<String, Object>>();
        Statement stmt = null;
        ResultSet rs = null;

        try
        {
            String query = "SELECT * FROM BOOKING";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            System.out.println("[*] Getting active task data");

            while (rs.next())
            {
                Map<String, Object> booking = new HashMap<>();
                booking.put("booking_id", rs.getString("booking_id"));
                booking.put("service_id", rs.getString("service_id"));
                booking.put("client_id", rs.getString("client_id"));
                booking.put("freelancer_id", rs.getString("freelancer_id"));
                booking.put("date", rs.getString("date"));
                booking.put("status", rs.getString("status"));

                bookings.add(booking);
            }
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }

        return bookings;
    }

    public ArrayList<Map<String, Object>> getService(Connection conn)
    {
        ArrayList<Map<String, Object>> services = new ArrayList<Map<String, Object>>();
        Statement stmt = null;
        ResultSet rs = null;

        try
        {
            String query = "SELECT * FROM SERVICE";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            System.out.println("[*] Getting active task data");

            while (rs.next())
            {
                Map<String, Object> service = new HashMap<>();
                service.put("service_id", rs.getString("service_id"));
                service.put("freelancer_id", rs.getString("freelancer_id"));
                service.put("service_title", rs.getString("service_title"));
                service.put("service_detail", rs.getString("service_detail"));
                service.put("status", rs.getString("status"));

                services.add(service);
            }
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }

        return services;
    }

    public ArrayList<Map<String, Object>> getApplications(Connection conn)
    {
        ArrayList<Map<String, Object>> applications = new ArrayList<Map<String, Object>>();
        Statement stmt = null;
        ResultSet rs = null;

        try
        {
            String query = "SELECT * FROM TASK_APPLICATIONS";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            System.out.println("[*] Getting task applications data");

            while (rs.next())
            {
                Map<String, Object> application = new HashMap<>();
                application.put("application_id", rs.getString("application_id"));
                application.put("freelancer_id", rs.getString("freelancer_id"));
                application.put("service_title", rs.getString("service_title"));
                application.put("service_detail", rs.getString("service_detail"));
                application.put("status", rs.getString("status"));
                application.put("submission", rs.getString("submission"));

                applications.add(application);
            }
        }
        catch (SQLException e)
        {
            System.out.println(e);
        }

        return applications;
    }

}
