package com.codeclan.JurassicPark.models.food;

public class Food{

    private String foodType;
    private int foodQuantity;

    public Food(String foodType, int foodQuantity) {
        this.foodType = foodType;
        this.foodQuantity = foodQuantity;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public int getFoodQuantity() {
        return foodQuantity;
    }

    public void setFoodQuantity(int foodQuantity) {
        this.foodQuantity = foodQuantity;
    }
}
