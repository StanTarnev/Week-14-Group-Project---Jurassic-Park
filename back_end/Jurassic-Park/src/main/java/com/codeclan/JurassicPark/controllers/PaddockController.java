package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.PaddockRepository;
import com.codeclan.JurassicPark.models.paddocks.Paddock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/park/paddocks")
public class PaddockController {
    @Autowired
    PaddockRepository paddockRepository;
    @GetMapping
    public List<Paddock> getAllPaddock(){
        return paddockRepository.findAll();
    }
    @GetMapping("{id}")

    public Optional<Paddock> getPaddock(@PathVariable Long id){
        return paddockRepository.findById(id);
    }

}

