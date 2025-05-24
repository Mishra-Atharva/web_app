package com.rushlance.backend.repo;

import com.rushlance.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long>
{
    @Query(value="SELECT * FROM bookings", nativeQuery=true)
    List<Booking> getAll();

    @Query(value="SELECT * FROM BOOKINGS WHERE client_id IN (SELECT id FROM USERS WHERE email = ':email');", nativeQuery = true)
    List<Booking> totalBookings(@Param("email") String email);

}
