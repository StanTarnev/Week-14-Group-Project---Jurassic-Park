package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.Repositories.ParkRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.Park;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/park")
public class ParkController {
//    @Autowired
//    VisitorRepository visitorRepository;
//
//    @GetMapping
//    public Park getAllPaddockAndVistors(){
//    List<Visitor> visitors = visitorRepository.findAll();
//    int  visitorCount = visitors.size();
//    double totalRevenue = visitorCount * 5;
//
//
//    Park park = new Park(,visitorCount,totalRevenue);
//        return park;
//    }

    @Autowired
    ParkRepository parkRepository;

}

