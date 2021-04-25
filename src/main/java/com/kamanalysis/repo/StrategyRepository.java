package com.kamanalysis.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kamanalysis.domain.Strategy;

@Repository
public interface StrategyRepository extends MongoRepository<Strategy, String> {

}
