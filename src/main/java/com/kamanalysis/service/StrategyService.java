package com.kamanalysis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kamanalysis.domain.Strategy;
import com.kamanalysis.repo.StrategyRepository;

@Service
public class StrategyService {

	@Autowired
	StrategyRepository strategy;

	public List<Strategy> getAllStrategies() {

		List<Strategy> strategies = strategy.findAll();
		if (strategies != null) {
			return strategies;
		}
		return null;
	}

	public Strategy add(Strategy newStrategy) {
		return strategy.save(newStrategy);
	}

	public Strategy updateStrategy(Strategy strategy2) {
		return strategy.save(strategy2);
	}

	public void deleteStrategy(Strategy strategy2) {
		strategy.delete(strategy2);
	}

}
