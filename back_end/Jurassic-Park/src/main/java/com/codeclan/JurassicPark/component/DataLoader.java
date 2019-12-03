package com.codeclan.JurassicPark.component;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.models.Paddock;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner{

        @Autowired
        DinosaurRepository dinosaurRepository;
        @Autowired
        VisitorRepository visitorRepository;
        @Autowired
        PaddockRepository paddockRepository;
    public DataLoader() {
    }

    public void run(ApplicationArguments args)  {
        Visitor visitor1 = new Visitor("sree",30);
        Visitor visitor2 = new Visitor("uday",30);
        visitorRepository.save(visitor1);
        visitorRepository.save(visitor2);

        Paddock paddock1 = new Paddock("Jungle","carnivore", 4);
        Paddock paddock2 = new Paddock("Rainforest","herbivore", 4);
        paddockRepository.save(paddock1);
        paddockRepository.save(paddock2);

<<<<<<< HEAD
        Dinosaur dinosaur1= new Dinosaur("Georgina","Pachycephalosaurus",5,"Female",22,"herbivore",paddock2);
        Dinosaur dinosaur2= new Dinosaur("David", "Dreadnoughtus",10,"Male",15,"carnivore",paddock1);
=======
        Dinosaur dinosaur1= new Dinosaur("Georgina","Cerasinops",5,"Female",22,"Herbivores",paddock1);
        Dinosaur dinosaur2= new Dinosaur("David", "Microceratops",10,"Male",15,"Carnivores",paddock1);
>>>>>>> origin/from-master

        dinosaurRepository.save(dinosaur1);
        dinosaurRepository.save(dinosaur2);

    }
}