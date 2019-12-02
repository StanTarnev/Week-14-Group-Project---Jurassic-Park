package com.codeclan.JurassicPark.Repositories;
import com.codeclan.JurassicPark.Projections.EmbedDinosaurs;
import com.codeclan.JurassicPark.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedDinosaurs.class)

 public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {
}
