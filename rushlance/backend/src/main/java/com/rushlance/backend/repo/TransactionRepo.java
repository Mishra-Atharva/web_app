package com.rushlance.backend.repo;
import java.util.List;

import com.rushlance.backend.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepo extends JpaRepository<Transactions, Integer> {
    @Query(value="SELECT * FROM transactions", nativeQuery=true)
    List<Transactions> getAll();
}
