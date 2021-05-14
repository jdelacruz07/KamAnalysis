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
		strategy.setAsset("Eur");
		strategy.setMarket("forex");
		strategy.setStrategy("Estrategia: posicionarse corto, es decir venta del USD y compra del MXN.");
		strategy.setBuySell(15);
		strategy.setStopLoss(10);
		strategy.setTakeProfit(20);
		strategy.setUrlImg("../assets/img/USDMXN.png");
		strategy.setAltImg("Image USDMXN");

		Pageable pageWithFourElements = PageRequest.of(0, 100);

		int strategiesBefore = service.getAllStrategies(pageWithFourElements).getNumberOfElements();
		Strategy newStrategy = service.add(strategy);
		System.out.println("El numero de estrategias anteriores son " + strategiesBefore);
		System.out.println("Esta es la nueva estrategia " + newStrategy);
		assertEquals(strategiesBefore + 1, service.getAllStrategies(pageWithFourElements).getNumberOfElements());
//		assertNotEquals(strategiesBefore + 1, service.getAllStrategies().size());
	}

	@Test
	void getStrategiesByMarket() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		String market = "forex";
		Page<Strategy> strategies = service.getStrategiesByMarket(market, pageWithElements);
		assertNotNull(strategies);
//		assertEquals(2, strategies.getTotalElements());
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
		strategy.setUrlImg("IBEX");
		Strategy updateStrategy = service.updateStrategy(strategy);
		assertEquals("IBEX", updateStrategy.getUrlImg());
	}

	@Test
	void deleteStrategy() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		int totalStrategies = service.getAllStrategies(pageWithElements).getNumberOfElements();
		Page<Strategy> strategies = service.getAllStrategies(pageWithElements);
		Strategy strategy = strategies.getContent().get(0);
		service.deleteStrategy(strategy.getId());
//		strategy = strategies.getContent().get(1);
//		service.deleteStrategy(strategy.getId());
//		strategy = strategies.getContent().get(2);
//		service.deleteStrategy(strategy.getId());
//		strategy = strategies.getContent().get(3);
//		service.deleteStrategy(strategy.getId());
//		strategy = strategies.getContent().get(4);
//		service.deleteStrategy(strategy.getId());
//		strategy = strategies.getContent().get(5);
//		service.deleteStrategy(strategy.getId());
		assertEquals(totalStrategies - 1, service.getAllStrategies(pageWithElements).getNumberOfElements());
	}
}
