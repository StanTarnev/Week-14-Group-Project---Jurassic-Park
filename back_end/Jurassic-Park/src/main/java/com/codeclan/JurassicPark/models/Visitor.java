package com.codeclan.JurassicPark.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name ="visitors")
public class Visitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private String date;

    public Visitor() {
    }

    public Visitor(String date ) {
        this.date = date;
    }


    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
