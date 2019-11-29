package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.DinosaurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

    @RestController
//    @RequestMapping(value="/dinosaurs")
    public class DinosaurController {

        @Autowired
        DinosaurRepository dinosaurRepository;

    }
