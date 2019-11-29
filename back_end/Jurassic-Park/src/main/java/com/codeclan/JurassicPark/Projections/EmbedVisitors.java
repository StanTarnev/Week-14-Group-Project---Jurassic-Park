package com.codeclan.JurassicPark.Projections;
import com.codeclan.JurassicPark.models.Visitor;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedVisitors", types = Visitor.class)
public interface EmbedVisitors {

}
