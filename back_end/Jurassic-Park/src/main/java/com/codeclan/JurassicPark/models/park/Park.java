package com.codeclan.JurassicPark.models.park;

import com.codeclan.JurassicPark.models.food.Food;
import com.codeclan.JurassicPark.models.paddocks.Paddock;
import com.codeclan.JurassicPark.models.visitor.Visitor;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
@Entity
@Table(name="park")
public class Park {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id ;

//
//    @JsonIgnoreProperties("park")
//    @OneToMany(mappedBy = "park", fetch = FetchType.LAZY)
    private ArrayList<Visitor> visitors;

    private ArrayList<Food> foodStock;
//    private Manager manager;
    private ArrayList<Paddock> paddocks;
    private int funds;

    public Park(ArrayList<Paddock> paddocks) {
        this.paddocks = paddocks;
    }
}
