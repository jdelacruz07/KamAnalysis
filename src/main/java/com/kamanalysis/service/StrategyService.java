package com.kamanalysis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.kamanalysis.domain.Strategy;
import com.kamanalysis.repo.StrategyRepository;

@Service
public class StrategyService {

	@Autowired
	StrategyRepository strategy;

	public Page<Strategy> getAllStrategies(Pageable pageable) {

		Page<Strategy> strategies = strategy.findAll(pageable);
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

	public void deleteStrategy(String id) {
		strategy.deleteById(id);
	}

	public Page<Strategy> getStrategiesByMarket(String market, Pageable pageable) {
		
		return strategy.findByMarket(market, pageable);
	}

}
