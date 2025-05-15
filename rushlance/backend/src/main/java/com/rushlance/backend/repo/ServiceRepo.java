package com.rushlance.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.rushlance.backend.model.Service;

import java.util.List;

@Repository
public interface ServiceRepo extends JpaRepository<Service, Long>
{
    @Query(value = "SELECT * FROM service", nativeQuery = true)
    List<Service> getServices();
}
