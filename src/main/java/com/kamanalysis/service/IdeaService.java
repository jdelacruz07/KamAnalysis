package com.kamanalysis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.kamanalysis.domain.Idea;
import com.kamanalysis.repo.IdeaRepository;

@Service
public class IdeaService {

	@Autowired
	IdeaRepository ideaRepository;

	public Page<Idea> getAllIdeas(Pageable pageable) {
		return ideaRepository.findAll(pageable);

	}

	public Idea addIdea(Idea idea) {
		List<Idea> ideaList = ideaRepository.findByIdea(idea.getIdea());
		boolean isNotPresent = ideaList.isEmpty();
		if (idea.getIdea() != null && isNotPresent) {
			return ideaRepository.save(idea);
		} else {
			return idea = null;
		}

	}

	public void deleteIdea(String id) {

		ideaRepository.deleteById(id);

	}

	public Idea updateIdea(Idea idea) {
		boolean strategy2 = ideaRepository.findById(idea.getId()).isPresent();
		if (strategy2) {
			return ideaRepository.save(idea);
		} else {
			return null;
		}
	}

}
