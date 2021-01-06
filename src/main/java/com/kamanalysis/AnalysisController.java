package com.kamanalysis;

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

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AnalysisController {

	@Autowired
	AnalysisService analysisService;

	@PostMapping
	public ResponseEntity addStrategy(@RequestBody Strategy strategy, HttpServletRequest request) {
		System.out.println("Estrategia en controller" + strategy);
		System.out.println("Ip en el post " + request.getRemoteAddr());
		Strategy newStrategy = analysisService.addStrategy(strategy);

		return new ResponseEntity(newStrategy, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity getAllStrategies(Pageable pageable) {
		return new ResponseEntity(analysisService.getAllStrategies(pageable), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity deleteStrategy(@PathVariable String id) {
		analysisService.deleteStrategy(id);

		return new ResponseEntity(HttpStatus.NO_CONTENT);

	}

	@PutMapping
	public ResponseEntity updateStrategy(@RequestBody Strategy strategy) {
		Strategy strategy2 = analysisService.updateStrategy(strategy);
		return new ResponseEntity(strategy2, HttpStatus.OK);
	}

}
