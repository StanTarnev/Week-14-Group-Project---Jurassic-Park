package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.response.Park;
import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.Paddock;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
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

    @GetMapping("/paddock")
    public List<Paddock> getAllPaddock() {
        return paddockRepository.findAll();
    }

    @GetMapping("/paddock/{id}")
    public Optional<Paddock> getPaddock(@PathVariable Long id) {
        return paddockRepository.findById(id);
    }




    @GetMapping("/visitor")
    public List<Visitor> getAllVisitors() {
        return  visitorRepository.findAll();
    }

    @GetMapping("/dinosaur")
    public List<Dinosaur> getAllDinosaurs() {
        return dinosaurRepository.findAll();
    }

    @GetMapping("/dinosaur/{id}")
    public Optional<Dinosaur> getDinosaur(@PathVariable Long id) {
        return dinosaurRepository.findById(id);
    }

    @GetMapping("/view")
    public Park getAllPaddockAndVistors(){
    List<Visitor> visitors = visitorRepository.findAll();
    List<Dinosaur> dinosaurs = dinosaurRepository.findAll();
    List<Paddock> paddocks= paddockRepository.findAll();
    double totalRevenue = visitors.stream().map(visitor -> visitor.getFees()).collect(Collectors.summingDouble(n -> n));
    Park park = new Park( dinosaurs,paddocks,visitors,totalRevenue);
        return park;
    }

}

