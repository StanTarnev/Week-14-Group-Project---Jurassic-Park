package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.Paddock;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value="/park")
public class ParkController {
    @Autowired
    PaddockRepository paddockRepository;
    @Autowired
    VisitorRepository visitorRepository;

    @Autowired
    DinosaurRepository dinosaurRepository;
    @GetMapping
    public Park getAllPaddockAndVistors(){
    List<Visitor> visitors = visitorRepository.findAll();
    List<Dinosaur> dinosaurs = dinosaurRepository.findAll();
    List<Paddock> paddocks= paddockRepository.findAll();
    double totalRevenue = visitors.stream().map(visitor -> visitor.getFees()).collect(Collectors.summingDouble(n -> n));
    Park park = new Park( dinosaurs,paddocks,visitors,totalRevenue);
        return park;
    }

}

