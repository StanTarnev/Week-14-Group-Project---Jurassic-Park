package com.codeclan.JurassicPark.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name ="financialRecords")
public class FinancialRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column (name ="date")
    private String date;

    @Column (name ="dailyRevenue")
    private double dailyRevenue;

    @Column (name ="visitors")
    private int visitors;

    @JsonIgnoreProperties("financialRecords")
    @ManyToOne
    @JoinColumn(name = "park_id")
    private Park park;

    public FinancialRecord(String date, double dailyRevenue, int visitors, Park park) {
        this.date = date;
        this.dailyRevenue = dailyRevenue;
        this.visitors = visitors;
        this.park = park;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getDailyRevenue() {
        return dailyRevenue;
    }

    public void setDailyRevenue(double dailyRevenue) {
        this.dailyRevenue = dailyRevenue;
    }

    public int getVisitors() {
        return visitors;
    }

    public void setVisitors(int  visitors) {
        this.visitors = visitors;
    }

    public Park getPark() {
        return park;
    }

    public void setPark(Park park) {
        this.park = park;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
