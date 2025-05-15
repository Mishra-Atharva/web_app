package com.rushlance.backend.repo;

import com.rushlance.backend.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepo extends JpaRepository<Address, Long>
{
    @Query(value = "SELECT * FROM ADDRESS", nativeQuery = true)
    List<Address> getAll();
}
