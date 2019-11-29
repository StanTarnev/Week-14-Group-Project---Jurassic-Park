package com.codeclan.JurassicPark.Repositories;

import com.codeclan.JurassicPark.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaddockRepository extends JpaRepository<Paddock,Long> {

}
