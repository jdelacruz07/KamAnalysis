package com.kamanalysis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gap")
@CrossOrigin
public class GapController {

	@Autowired
	GapRepository gapRepository;

	@PostMapping
	public ResponseEntity addGap(@RequestBody Gap gap) {
		System.out.println("El nuevo hueco es " + gap);
		Gap gapExits = gapRepository.findByDateSelected(gap.dateSelected);
		System.out.println("Existe el hueco " + gapExits);
		if (gapExits == null) {
			gapRepository.save(gap);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.FOUND);
		}
	}

	@GetMapping
	public Page<Gap> getGaps(Pageable pageable) {
		Page<Gap> gaps = gapRepository.findAll(pageable);
//			gaps.forEach(x -> System.out.println(x));
		return gapRepository.findAll(pageable);
	}

	@DeleteMapping("/{id}")
	public void deleteGap(@PathVariable String id) {
		System.out.println("Eliminar id: " + id);
		gapRepository.deleteById(id);

	}
}
