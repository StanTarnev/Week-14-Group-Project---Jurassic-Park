package com.codeclan.JurassicPark.Repositories;
import com.codeclan.JurassicPark.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {
}
