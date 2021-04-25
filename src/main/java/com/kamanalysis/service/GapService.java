package com.kamanalysis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.kamanalysis.domain.Gap;
import com.kamanalysis.repo.GapRepository;

@Service
public class GapService {

	@Autowired
	GapRepository gapRepository;

	public ResponseEntity<Gap> addGap(Gap gap) {
		Gap gapExits = gapRepository.findByDateSelected(gap.getDateSelected());
		if (gapExits == null) {
			Gap newGap = gapRepository.save(gap);
			return new ResponseEntity<Gap>(newGap, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Gap>(HttpStatus.FOUND);
		}
	}

	public Page<Gap> getAllGaps(Pageable pageable) {
		return gapRepository.findAllByOrderByDateSelectedDesc(pageable);
	}

	public void deleteById(String id) {
		gapRepository.deleteById(id);
	}

}
