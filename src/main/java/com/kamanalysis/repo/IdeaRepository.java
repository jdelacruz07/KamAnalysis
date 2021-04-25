package com.kamanalysis.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kamanalysis.domain.Idea;

@Repository
public interface IdeaRepository extends MongoRepository<Idea, String> {

	List<Idea> findByIdea(String idea);

}
