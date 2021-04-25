package com.kamanalysis.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.kamanalysis.domain.Gap;

@SpringBootTest
class GapServiceTest {

	@Autowired
	GapService gapService;

	@Disabled
	@Test
	public void addGap() {
		Gap gap = new Gap();
		Date date = new Date();
		gap.setDateSelected(date);
		gap.setGapClose("Si");
		PageRequest p = PageRequest.of(0, 20);
		int gapsBefore = gapService.getAllGaps(p).getSize();

		ResponseEntity<Gap> newGap = gapService.addGap(gap);
		int gapsAfter = gapService.getAllGaps(p).getSize();

		assertEquals(gapsBefore, gapsAfter);
		assertEquals(HttpStatus.CREATED, newGap.getStatusCode());
	}

}
