package com.kamanalysis;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StrategyRepository extends MongoRepository<Strategy, String> {

	List<Strategy> findByIdea(String idea);

}
