package com.codeclan.JurassicPark.Projections;
import com.codeclan.JurassicPark.models.FinancialRecord;
import com.codeclan.JurassicPark.models.Park;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedFinancialRecords", types = FinancialRecord.class)
public interface EmbedFinancialRecords {
    long getId();
    String getDate();
    double getDailyRevenue();
    int getVisitors();
    Park getPark();
    void setDate();
    void setDailyRevenue();
    void setVisitors();
}

