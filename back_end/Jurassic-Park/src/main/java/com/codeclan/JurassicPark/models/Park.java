package com.codeclan.JurassicPark.models;

public class Park {
    private double dailyRevenue;
    private double visitorCount ;

    public Park( double dailyRevenue, int  visitorCount) {
        this.dailyRevenue = dailyRevenue;
        this.visitorCount = visitorCount;
    }

    public double getDailyRevenue() {
        return dailyRevenue;
    }

    public void setDailyRevenue(double dailyRevenue) {
        this.dailyRevenue = dailyRevenue;
    }

    public double getVisitorCount() {
        return visitorCount;
    }

    public void setVisitorCount(double visitorCount) {
        this.visitorCount = visitorCount;
    }
}
