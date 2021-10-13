package com.kamanalysis.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kamanalysis.domain.Gap;
import com.kamanalysis.service.GapService;

@RestController
@RequestMapping("/gap")
@CrossOrigin
public class GapController {

	@Autowired
	GapService gapService;

	@PostMapping("/add")
	public ResponseEntity<Gap> addGap(@RequestBody Gap gap) {
		System.out.println("Agregar gap " + gap);
		return gapService.addGap(gap);
	}

	@GetMapping
	public Page<Gap> getGaps(Pageable pageable) {
		Page<Gap> gaps = gapService.getAllGaps(pageable);
		return gaps;
	}

	@DeleteMapping("/{id}")
	public void deleteGap(@PathVariable String id) {
		System.out.println("Eliminar id: " + id);
		gapService.deleteById(id);
	}

}
