package com.kamanalysis.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kamanalysis.domain.Strategy;

public interface StrategyRepository extends MongoRepository<Strategy, String> {

}
