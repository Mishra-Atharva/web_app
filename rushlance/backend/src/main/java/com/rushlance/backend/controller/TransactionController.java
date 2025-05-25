package com.rushlance.backend.controller;

import com.rushlance.backend.model.Transactions;
import com.rushlance.backend.repo.TransactionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TransactionController {

    @Autowired
    private TransactionRepo transactionRepo;

    @PostMapping("/transactions")
    public Transactions addTransaction(@RequestBody Transactions transactions) {
        return transactionRepo.save(transactions);
    }

    @GetMapping("/transactions")
    public List<Transactions> getAllTransactions()
    {
        return this.transactionRepo.getAll();
    }
}
