package com.codeclan.JurassicPark.Projections;

import com.codeclan.JurassicPark.models.Dinosaur;
import com.codeclan.JurassicPark.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;
@Projection(name= "embedPaddocks", types = Paddock.class)
public interface EmbedPaddocks {
        long getId();
        String getName();
        String getType();
        int getCapacity();
        List<Dinosaur> getDinosaurs();
}
