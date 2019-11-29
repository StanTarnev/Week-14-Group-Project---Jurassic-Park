package com.codeclan.JurassicPark.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="paddocks")
public class Paddock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @JsonIgnoreProperties("paddock")
    @OneToMany(mappedBy = "paddock")
    private List<Dinosaur> dinosaurs;

    @Column(name = "name")
    private String name;

    @Column(name="capacity")
    private int capacity;

    public Paddock() {
    }

    public Paddock(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.dinosaurs=new ArrayList<>();
    }

    public List<Dinosaur> getDinosaurs() {
        return dinosaurs;
    }

    public void setDinosaurs(ArrayList<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public String getPaddock() {
        return name;
    }

    public void setPaddock(String name) {
        this.name = name;
    }


    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
    public void addDinosaur(Dinosaur dinosaur){
        this.dinosaurs.add(dinosaur);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
