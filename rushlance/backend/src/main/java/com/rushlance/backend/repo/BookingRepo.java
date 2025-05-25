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
import java.util.Map;

@Repository
public interface BookingRepo extends JpaRepository<Bookings, Long>
{
    @Query(value="SELECT * FROM bookings", nativeQuery=true)
    List<Bookings> getAll();

    @Query(value="SELECT b.id, s.title,s.description,s.price, b.booked_at, b.status FROM BOOKINGS b JOIN SERVICES s ON b.service_id = s.id JOIN USERS u ON b.client_id = u.id WHERE u.email = :email;", nativeQuery = true)
    List<Map<String, Object>> totalBookings(@Param("email") String email);

    @Query(value = "UPDATE BOOKINGS SET status = :status, completed_at = :date WHERE id = :id;", nativeQuery = true)
    Boolean updateBookings(@Param("id") Integer id, @Param("status") String status, @Param("date") LocalDate completed_at);
}
