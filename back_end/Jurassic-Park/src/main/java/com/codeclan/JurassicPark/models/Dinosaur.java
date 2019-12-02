package com.codeclan.JurassicPark.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name ="dinosaurs")
public class Dinosaur
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column (name ="name")
    private String name;

    @Column (name ="species")
    private String species;

    @Column (name ="belly")
    private int belly;

    @Column (name ="gender")
    private String gender;

    @Column (name ="age")
    private int age;

    @Column(name = "type")
    private String type;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name = "pad_id", nullable=false)
    private Paddock paddock;


    public Dinosaur(String name, String species, int belly, String gender, int age, String type, Paddock paddock) {
        this.name = name;
        this.species = species;
        this.belly = belly;
        this.gender = gender;
        this.age = age;
        this.type = type;
        this.paddock = paddock;
    }

    public Dinosaur() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public int getBelly() {
        return belly;
    }

    public void setBelly(int belly) {
        this.belly = belly;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Paddock getPaddock() {
        return paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
