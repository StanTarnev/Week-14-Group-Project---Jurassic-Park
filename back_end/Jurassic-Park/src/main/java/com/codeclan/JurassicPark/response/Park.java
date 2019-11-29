package com.codeclan.JurassicPark.response;
import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.models.Paddock;
import com.codeclan.JurassicPark.models.Visitor;

import java.util.List;

public class Park {


    private List<Dinosaur> dinosaurs;

    private List<Visitor> visitors;
    private List<Paddock> paddocks;

    private double revenue;

    public Park(List<Dinosaur> dinosaurs, List<Paddock> paddocks, List<Visitor> visitors,double revenue) {
        this.dinosaurs = dinosaurs;
        this.paddocks = paddocks;
        this.revenue = revenue;
        this.visitors=visitors;
    }

    public List<Dinosaur> getDinosaurs() {
        return dinosaurs;
    }

    public void setDinosaurs(List<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public List<Paddock> getPaddocks() {
        return paddocks;
    }

    public double getRevenue() {
        return revenue;
    }

    public void setRevenue(double revenue) {
        this.revenue = revenue;
    }

    public List<Visitor> getVisitors() {
        return visitors;
    }

    public void setVisitors(List<Visitor> visitors) {
        this.visitors = visitors;
    }

    public void setPaddocks(List<Paddock> paddocks) {
        this.paddocks = paddocks;
    }
}
