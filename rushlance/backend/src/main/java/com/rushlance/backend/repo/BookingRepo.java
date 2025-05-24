package com.rushlance.backend.repo;

import com.rushlance.backend.model.Bookings;
import org.hibernate.annotations.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<Bookings, Long>
{
    @Query(value="SELECT * FROM bookings", nativeQuery=true)
    List<Bookings> getAll();

    @Query(value="SELECT * FROM BOOKINGS WHERE client_id IN (SELECT id FROM USERS WHERE email = :email);", nativeQuery = true)
    List<Bookings> totalBookings(@Param("email") String email);

    @Query(value = "UPDATE BOOKINGS SET status = :status, completed_at = :date WHERE id = :id;", nativeQuery = true)
    Boolean updateBookings(@Param("id") Integer id, @Param("status") String status, @Param("date") LocalDate completed_at);
}
