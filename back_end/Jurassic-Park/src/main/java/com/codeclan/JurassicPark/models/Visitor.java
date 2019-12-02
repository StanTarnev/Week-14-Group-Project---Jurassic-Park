package com.codeclan.JurassicPark.models;

import javax.persistence.*;

@Entity
@Table(name ="visitors")
public class Visitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name ;


    @Column(name="fees")
    private double fees;

    public Visitor() {
    }

    public Visitor(String name , int fees){
        this.name = name ;
        this.fees = fees;
    }

    public double getFees() {
        return fees;
    }

    public void setFees(double fees) {
        this.fees = fees;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
