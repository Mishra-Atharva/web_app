package com.rushlance.backend.repo;

import com.rushlance.backend.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepo extends JpaRepository<Application, Long>
{
    @Query(value = "SELECT * FROM APPLICATION", nativeQuery = true)
    List<Application> getAll();
}
