package com.polyglockers.polyglockers.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.polyglockers.polyglockers.glocks.Finance;

public interface FinanceRepository extends MongoRepository<Finance, String>{
    @Query("{'name': ?0")
    Optional<Finance> findByName(String name);
}
