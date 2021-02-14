package com.kamanalysis;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GapRepository extends MongoRepository<Gap, String> {

	Gap findByDateSelected(Date dateSelected);

}
