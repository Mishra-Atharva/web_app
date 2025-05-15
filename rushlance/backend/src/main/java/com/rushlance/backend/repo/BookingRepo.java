package com.rushlance.backend.repo;

import com.rushlance.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long>
{
    @Query(value="SELECT * FROM BOOKING", nativeQuery=true)
    List<Booking> getAll();
}
