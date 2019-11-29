package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.models.Paddock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/paddocks")
public class PaddockController {

    @Autowired
    PaddockRepository paddockRepository;

//    @GetMapping
//    public List<Paddock> getAllPaddocks() {
//        return paddockRepository.findAll();
//
//
//    }
}
