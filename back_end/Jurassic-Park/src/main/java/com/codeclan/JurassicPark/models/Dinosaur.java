package com.codeclan.JurassicPark.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Random;

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
    @Column(name = "img")
    private String img;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name = "pad_id")
    private Paddock paddock;


    public Dinosaur(String name, String species, int belly, String gender, int age, String type, Paddock paddock) {
        this.name = name;
        this.species = species;
        this.belly = belly;
        this.gender = gender;
        this.age = age;
        this.type = type;
        this.paddock = paddock;
        this.img= getImgUrl();
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
    public String  getImgUrl() {
        ArrayList<String> images = new ArrayList<>();
        images.add("https://everythingdinosaurs.weebly.com/uploads/1/3/7/3/13731406/2421347.jpg?542");
        images.add("https://upload.wikimedia.org/wikipedia/commons/d/d5/Cerasinops_BW.jpg");
        images.add("http://planetdi.startlogic.com/dinosaur_list/images/leptoceratops_cs.jpg");
        images.add("http://1.bp.blogspot.com/_R3alTV6BaSE/TSfAFRVuE9I/AAAAAAAADVY/OH3xPkAoKvs/s1600/Panoplosaurus.gif");
        images.add("https://cdn.mos.cms.futurecdn.net/Vs44m6AKXM3MvfX83DDtAE-320-80.png");
        images.add("https://cdn.britannica.com/19/128219-050-15FA6D07/Therizinosaurus-dinosaurs.jpg");
        images.add("https://i.pinimg.com/originals/50/0a/4e/500a4e8a16741c372e254141b47f7571.jpg");
        int rnd = new Random().nextInt(images.size());
        return this.img = images.get(rnd);
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
