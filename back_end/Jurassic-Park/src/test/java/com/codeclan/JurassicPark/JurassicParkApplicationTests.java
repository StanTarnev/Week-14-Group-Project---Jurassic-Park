package com.codeclan.JurassicPark;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.dinosaurs.Dinosaur;
import com.codeclan.JurassicPark.models.paddocks.Paddock;
import com.codeclan.JurassicPark.models.visitor.Visitor;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class JurassicParkApplicationTests {
	@Autowired
	DinosaurRepository dinosaurRepository;
	@Autowired
	VisitorRepository visitorRepository;
	@Autowired
	PaddockRepository paddockRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void createPark(){


		Visitor visitor1 = new Visitor("sree",200);
		Visitor visitor2 = new Visitor("uday",30);
		visitorRepository.save(visitor1);
		visitorRepository.save(visitor2);

		Paddock paddock1 = new Paddock("paddock1",4);
		paddockRepository.save(paddock1);

		Dinosaur dinosaur1= new Dinosaur("Pachycephalosaurus",5,"Female",22,paddock1);
		Dinosaur dinosaur2= new Dinosaur("Dreadnoughtus",10,"Male",15,paddock1);
		dinosaurRepository.save(dinosaur1);
		dinosaurRepository.save(dinosaur2);
//		paddock1.addDinosaur(dinosaur1);
//		paddock1.addDinosaur(dinosaur2);


//		dinosaur1.setPaddock(paddock1);
//		dinosaur2.setPaddock(paddock1);



	}
}
