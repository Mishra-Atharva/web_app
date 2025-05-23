package com.rushlance.backend.repo;
import com.rushlance.backend.model.Reviews;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepo extends JpaRepository<Reviews, Integer>{
    @Query(value="SELECT * FROM reviews", nativeQuery=true)
    List<Reviews> getAll();
}
