package com.kamanalysis;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class KamAnalysisApplicationTests {

	@Autowired
	GapRepository gapRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void addGap() {
		Gap gap = new Gap();
		Date date = new Date();
		gap.setDateSelected(date);
		gap.setGapClose("Si");
		Gap newGap = gapRepository.findByDateSelected(gap.getDateSelected());
		System.out.println("El nuevo gap es " + newGap);
		long gapsBefore = gapRepository.count();
		long gapsAfter = 0;
		if (newGap == null) {
			gapRepository.save(gap);
			gapsAfter = gapRepository.count();
		}
		assertEquals(gapsBefore, (gapsAfter - 1));
	}
}
