package com.codeclan.JurassicPark.models.paddocks;

import com.codeclan.JurassicPark.models.dinosaurs.Dinosaur;
import com.codeclan.JurassicPark.models.visitor.Visitor;

import java.util.ArrayList;

public class Paddock {
    private ArrayList<Dinosaur> dinosaurs;
    private String paddockName;
    private ArrayList<Visitor> visitors;
    private int capacity;

    public Paddock(String paddock, int capacity) {
        this.paddockName = paddock;
        this.capacity = capacity;
        this.dinosaurs=new ArrayList<>();
        this.visitors=new ArrayList<>();
    }

    public ArrayList<Dinosaur> getDinosaurs() {
        return dinosaurs;
    }

    public void setDinosaurs(ArrayList<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public String getPaddock() {
        return paddockName;
    }

    public void setPaddock(String paddockName) {
        this.paddockName = paddockName;
    }

    public ArrayList<Visitor> getVisitors() {
        return visitors;
    }

    public void setVisitors(ArrayList<Visitor> visitors) {
        this.visitors = visitors;
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
    public void addVisitor(Visitor visitor){
        this.visitors.add(visitor);
    }

}
