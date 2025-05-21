package com.rushlance.backend.repo;

import com.rushlance.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer>
{
    Users findByEmail(String email);

    @Query(value="SELECT * FROM USERS", nativeQuery=true)
    List<Users> getAll();

//    @Query(value="INSERT INTO USERS(first_name, last_name, email, password, date_of_birth, phone, user_type) VALUES (user.first_name, user.last_name, user.email, user.password, user.dob, user.phone, user.type)", nativeQuery=true)
//    save(Users user);
}
