package com.kamanalysis.web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kamanalysis.domain.Idea;
import com.kamanalysis.service.IdeaService;

@CrossOrigin
@RestController
@RequestMapping("/idea")
public class IdeaController {

	@Autowired
	IdeaService ideaService;

	@PostMapping
	public ResponseEntity<Idea> addIdea(@RequestBody Idea idea, HttpServletRequest request) {
		Idea newIdea = ideaService.addIdea(idea);
		return new ResponseEntity<Idea>(newIdea, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<Idea> getAllIdeas(Pageable pageable) {
		return new ResponseEntity(ideaService.getAllIdeas(pageable), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Idea> deleteIdea(@PathVariable String id) {
		ideaService.deleteIdea(id);
		return new ResponseEntity<Idea>(HttpStatus.NO_CONTENT);

	}

	@PutMapping
	public ResponseEntity<Idea> updateIdea(@RequestBody Idea idea) {
		System.out.println("put " + idea);
		Idea idea2 = ideaService.updateIdea(idea);
		return new ResponseEntity<Idea>(idea2, HttpStatus.OK);
	}

}
