package com.kamanalysis.repo;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.kamanalysis.domain.Gap;

public interface GapRepository extends MongoRepository<Gap, String> {

	Gap findByDateSelected(Date dateSelected);

	Page<Gap> findAllByOrderByDateSelectedDesc(Pageable pageable);

}
