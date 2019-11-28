package com.codeclan.JurassicPark.models.food;

public class Food{

    private FoodType foodType;
    private int foodQuantity;

    public Food(FoodType foodType, int foodQuantity) {
        this.foodType = foodType;
        this.foodQuantity = foodQuantity;
    }

    public FoodType getFoodType() {
        return foodType;
    }

    public void setFoodType(FoodType foodType) {
        this.foodType = foodType;
    }

    public int getFoodQuantity() {
        return foodQuantity;
    }

    public void setFoodQuantity(int foodQuantity) {
        this.foodQuantity = foodQuantity;
    }
}
