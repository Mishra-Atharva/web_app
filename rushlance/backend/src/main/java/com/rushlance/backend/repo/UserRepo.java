package com.rushlance.backend.repo;

import com.rushlance.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer>
{
    Users findByEmail(String email);

    @Query(value="SELECT * FROM USERS", nativeQuery=true)
    List<Users> getAll();

    @Query(value = "SELECT first_name, last_name, email, date_of_birth, phone, user_type FROM USERS WHERE email = :email", nativeQuery = true)
    List<Map<String, Object>> find(@Param("email") String email);
}
