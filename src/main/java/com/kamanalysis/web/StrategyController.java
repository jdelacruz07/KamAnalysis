package com.kamanalysis.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kamanalysis.domain.Strategy;
import com.kamanalysis.service.StrategyService;

@CrossOrigin
@RequestMapping("/strategy")
@RestController
public class StrategyController {

	@Autowired
	StrategyService strategyService;

	@PostMapping
	public Strategy addStrategy(Strategy newStrategy) {
		return strategyService.add(newStrategy);

	}

	@GetMapping
	public Page<Strategy> getAllStrategies(Pageable pageable) {
		return strategyService.getAllStrategies(pageable);
	}

	@PutMapping
	public Strategy updateStrategy(Strategy strategy) {
		return strategyService.add(strategy);
	}

	@DeleteMapping("/{Id}")
	public void deleteStrategy(@PathVariable String id) {
		strategyService.deleteStrategy(id);
	}

}
