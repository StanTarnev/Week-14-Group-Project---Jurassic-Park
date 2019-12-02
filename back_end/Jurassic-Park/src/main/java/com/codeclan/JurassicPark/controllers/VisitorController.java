package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/visitors")
public class VisitorController {
@Autowired
    VisitorRepository visitorRepository;
    @GetMapping
    public List<Visitor> getAllVisitors() {
        return visitorRepository.findAll();
    }
}
