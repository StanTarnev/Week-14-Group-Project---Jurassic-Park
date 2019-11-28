package com.codeclan.JurassicPark.models.visitor;

import com.codeclan.JurassicPark.models.paddocks.Paddock;

import java.util.ArrayList;

public class Visitor {
    private String name ;
    private int wallet;
    private ArrayList<Paddock> visitedPaddocks;
    public Visitor(String name ,int wallet){
        this.name = name ;
        this.wallet = wallet;
        this.visitedPaddocks= new ArrayList<Paddock>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Paddock> getVisitedPaddocks() {
        return visitedPaddocks;
    }

    public void setVisitedPaddocks(ArrayList<Paddock> visitedPaddocks) {
        this.visitedPaddocks = visitedPaddocks;
    }
    public void addVisitedPaddocks(Paddock paddock){
        this.visitedPaddocks.add(paddock);
    }

    public int getWallet() {
        return wallet;
    }

    public void setWallet(int wallet) {
        this.wallet = wallet;
    }
}
