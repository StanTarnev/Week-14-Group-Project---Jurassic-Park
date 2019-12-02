package com.codeclan.JurassicPark.Repositories;

import com.codeclan.JurassicPark.Projections.EmbedPaddocks;
import com.codeclan.JurassicPark.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedPaddocks.class)
public interface PaddockRepository extends JpaRepository<Paddock,Long> {

}
