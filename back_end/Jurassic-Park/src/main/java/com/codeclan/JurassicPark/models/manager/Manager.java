package com.codeclan.JurassicPark.models.manager;

public class Manager {
    private String name ;
    private String username ;
    private String Password;

    public Manager(String name, String username, String password) {
        this.name = name;
        this.username = username;
        Password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }
}
