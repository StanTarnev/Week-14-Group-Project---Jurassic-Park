package com.codeclan.JurassicPark.models.dinosaurs;

public class Dinosaur
{
    private Species species ;
    private int belly;
    private DinosaurType gender;
    private int age;

    public Dinosaur(Species species, int belly, DinosaurType gender, int age) {
        this.species = species;
        this.belly = belly;
        this.gender = gender;
        this.age = age;
    }

    public Species getSpecies() {
        return species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }

    public int getBelly() {
        return belly;
    }

    public void setBelly(int belly) {
        this.belly = belly;
    }

    public DinosaurType getGender() {
        return gender;
    }

    public void setGender(DinosaurType gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
