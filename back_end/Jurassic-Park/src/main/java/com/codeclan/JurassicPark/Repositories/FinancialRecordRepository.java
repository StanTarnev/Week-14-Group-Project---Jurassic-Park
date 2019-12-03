package com.codeclan.JurassicPark.Repositories;
import com.codeclan.JurassicPark.Projections.EmbedFinancialRecords;
import com.codeclan.JurassicPark.models.FinancialRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedFinancialRecords.class)
public interface FinancialRecordRepository extends JpaRepository<FinancialRecord, Long>{
}
