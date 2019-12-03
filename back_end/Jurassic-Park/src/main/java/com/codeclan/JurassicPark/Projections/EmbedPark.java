package com.codeclan.JurassicPark.Projections;
import com.codeclan.JurassicPark.models.Park;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedPark", types = Park.class)
public interface EmbedPark {
   double getDailyRevenue();
    int getVisitorCount();
    int getFinancialRecords();
}
