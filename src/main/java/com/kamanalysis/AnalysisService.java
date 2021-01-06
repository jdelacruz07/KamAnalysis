package com.kamanalysis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AnalysisService {

	@Autowired
	StrategyRepository strategyRepository;

	public Page<Strategy> getAllStrategies(Pageable pageable) {
		return strategyRepository.findAll(pageable);

	}

	public Strategy addStrategy(Strategy strategy) {
		List<Strategy> strategyList = strategyRepository.findByIdea(strategy.getIdea());
		boolean isNotPresent = strategyList.isEmpty();
		if (strategy.getIdea() != null && isNotPresent) {
			return strategyRepository.save(strategy);
		} else {
			return strategy = null;
		}

	}

	public void deleteStrategy(String id) {

		strategyRepository.deleteById(id);

	}

	public Strategy updateStrategy(Strategy strategy) {
		boolean strategy2 = strategyRepository.findById(strategy.getId()).isPresent();
		if (strategy2) {
			return strategyRepository.save(strategy);
		} else {
			return null;
		}
	}

}
