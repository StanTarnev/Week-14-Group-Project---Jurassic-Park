package com.codeclan.JurassicPark.component;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.Repositories.ParkRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.models.Paddock;
import com.codeclan.JurassicPark.models.Park;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner{

        @Autowired
        DinosaurRepository dinosaurRepository;
        @Autowired
        VisitorRepository visitorRepository;
        @Autowired
        PaddockRepository paddockRepository;
        @Autowired
         ParkRepository parkRepository;
    public DataLoader() {
    }

    public void run(ApplicationArguments args) throws Exception  {
        Park park = new Park (200,"12/02/2019");
        parkRepository.save(park);



        Visitor visitor1 = new Visitor("12/02/2019",park);
        visitorRepository.save(visitor1);

        park.addVisitors(visitor1);

        Paddock paddock1 = new Paddock("Jungle","carnivore", 4);
        Paddock paddock2 = new Paddock("Rainforest","herbivore", 4);
        paddockRepository.save(paddock1);
        paddockRepository.save(paddock2);


        Dinosaur dinosaur1= new Dinosaur("Georgina","Cerasinops",5,"Female",22,"Herbivores",paddock1);
        Dinosaur dinosaur2= new Dinosaur("David", "Microceratops",10,"Male",15,"Carnivores",paddock1);

        dinosaurRepository.save(dinosaur1);
        dinosaurRepository.save(dinosaur2);

    }

    /*public static String getDate()
            throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat(
                "dd/MM/yyyy");
        return formatter.parse(formatter.format(new Date()));
    }*/
}