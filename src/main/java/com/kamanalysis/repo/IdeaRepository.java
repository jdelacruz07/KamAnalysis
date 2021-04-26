package com.kamanalysis.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kamanalysis.domain.Idea;

public interface IdeaRepository extends MongoRepository<Idea, String> {

	List<Idea> findByIdea(String idea);

}
