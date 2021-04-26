package com.kamanalysis.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.kamanalysis.domain.Strategy;

@SpringBootTest
class StrategyServiceTest {

	@Autowired
	StrategyService service;

//	@Disabled
	@Test
	void addStrategy() {
		Strategy strategy = new Strategy();
		strategy.setAsset("USD/MXN");
		strategy.setStrategy("Estrategia: posicionarse corto, es decir venta del USD y compra del MXN.");
		strategy.setPrice(15);
		strategy.setStopLoss(10);
		strategy.setTakeProfit(20);
		strategy.setSrcImage("../assets/img/USDMXN.png");
		strategy.setAlt("Image Header");
		Pageable pageWithFourElements = PageRequest.of(0, 100);

		int strategiesBefore = service.getAllStrategies(pageWithFourElements).getNumberOfElements();
		Strategy newStrategy = service.add(strategy);
		System.out.println("El numero de estrategias anteriores son " + strategiesBefore);
		assertEquals(strategiesBefore + 1, service.getAllStrategies(pageWithFourElements).getNumberOfElements());
//		assertNotEquals(strategiesBefore + 1, service.getAllStrategies().size());
	}

	@Test
	void getAllStrategies() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		Page<Strategy> strategies = service.getAllStrategies(pageWithElements);
		assertNotNull(strategies);
	}

	@Test
	void updateStrategy() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		Page<Strategy> strategies = service.getAllStrategies(pageWithElements);
		Strategy strategy = strategies.getContent().get(0);
		strategy.setSrcImage("IBEX");
		Strategy updateStrategy = service.updateStrategy(strategy);
		assertEquals("IBEX", updateStrategy.getSrcImage());
	}

	@Test
	void deleteStrategy() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		int totalStrategies = service.getAllStrategies(pageWithElements).getNumberOfElements();
		Page<Strategy> strategies = service.getAllStrategies(pageWithElements);
		Strategy strategy = strategies.getContent().get(0);
		service.deleteStrategy(strategy.getId());
		assertEquals(totalStrategies - 1, service.getAllStrategies(pageWithElements).getNumberOfElements());
	}
}
