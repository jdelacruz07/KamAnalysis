package com.kamanalysis.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.kamanalysis.domain.Strategy;

@SpringBootTest
class StrategyServiceTest {

	@Autowired
	StrategyService service;

	@Disabled
	@Test
	void addStrategy() {
		Strategy strategy = new Strategy();
		strategy.setStrategy("Corto en el MXN/USD");
		strategy.setPrice(15);
		strategy.setStopLoss(10);
		strategy.setTakeProfit(20);
		strategy.setSrcImage("MXN/USD");

		int strategiesBefore = service.getAllStrategies().size();
		Strategy newStrategy = service.add(strategy);
		System.out.println("El numero de estrategias anteriores son " + strategiesBefore);
		assertEquals(strategiesBefore + 1, service.getAllStrategies().size());
//		assertNotEquals(strategiesBefore + 1, service.getAllStrategies().size());
	}

	@Test
	void getAllStrategies() {
		List<Strategy> strategies = service.getAllStrategies();
		assertNotNull(strategies);
	}

	@Test
	void updateStrategy() {
		List<Strategy> strategies = service.getAllStrategies();
		Strategy strategy = strategies.get(0);
		strategy.setSrcImage("IBEX");
		Strategy updateStrategy = service.updateStrategy(strategy);
		assertEquals("IBEX", updateStrategy.getSrcImage());
	}

	@Test
	void deleteStrategy() {
		int totalStrategies = service.getAllStrategies().size();
		List<Strategy> strategies = service.getAllStrategies();
		Strategy strategy = strategies.get(1);
		service.deleteStrategy(strategy);
		assertEquals(totalStrategies - 1, service.getAllStrategies().size());
	}
}
