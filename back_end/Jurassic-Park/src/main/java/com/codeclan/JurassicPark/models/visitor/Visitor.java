package com.codeclan.JurassicPark.models.visitor;

import com.codeclan.JurassicPark.models.paddocks.Paddock;

import javax.persistence.*;
import java.util.ArrayList;
@Entity
@Table(name ="visitors")
public class Visitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name ;
    @Column(name="wallet")
    private int wallet;

    public Visitor() {
    }

    public Visitor(String name , int wallet){
        this.name = name ;
        this.wallet = wallet;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWallet() {
        return wallet;
    }

    public void setWallet(int wallet) {
        this.wallet = wallet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
