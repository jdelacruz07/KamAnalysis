package com.kamanalysis.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Disabled;
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

	@Disabled
	@Test
	void addStrategy() {
		Strategy strategy = new Strategy();
		strategy.setAsset("USDMXN");
		strategy.setMarket("forex");
		strategy.setPosition("short");
		strategy.setStrategy("El dolar mostrando debilidad, continuara la fortaleza del peso mexicano.");
		strategy.setBuySell(20.23);
		strategy.setStopLoss(20.83);
		strategy.setTakeProfit(19.54);
//		strategy.setUrlImg("https://kam-img.s3.eu-central-1.amazonaws.com/EURGBP+Diario.png");
//		strategy.setUrlImg("https://kam-img.s3.eu-central-1.amazonaws.com/TSLA+Diario.png");
//		strategy.setUrlImg("https://kam-img.s3.eu-central-1.amazonaws.com/BTCUSD+Diario.png");
		strategy.setUrlImg("https://kam-img.s3.eu-central-1.amazonaws.com/USDMXN.png");
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

	@Disabled
	@Test
	void updateStrategy() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		Page<Strategy> strategies = service.getAllStrategies(pageWithElements);
		Strategy strategy = strategies.getContent().get(0);
		strategy.setUrlImg("IBEX");
		Strategy updateStrategy = service.updateStrategy(strategy);
		assertEquals("IBEX", updateStrategy.getUrlImg());
	}

	@Disabled
	@Test
	void deleteStrategy() {
		Pageable pageWithElements = PageRequest.of(0, 100);
		int totalStrategies = service.getAllStrategies(pageWithElements).getNumberOfElements();
		Page<Strategy> strategies = service.getAllStrategies(pageWithElements);
		Strategy strategy = strategies.getContent().get(3);
		service.deleteStrategy(strategy.getId());
		assertEquals(totalStrategies - 1, service.getAllStrategies(pageWithElements).getNumberOfElements());
	}
}
