package com.codeclan.JurassicPark.Projections;

import com.codeclan.JurassicPark.models.Dinosaur;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedDinosaurs", types = Dinosaur.class)
public interface EmbedDinosaurs {
    long getId();
    String getName();
    String getSpecies();
    int getBelly();
    String getGender();
    int getAge();
    String getType();
    String getPaddockName();
}
