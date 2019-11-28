package com.codeclan.JurassicPark.Repositories;

import com.codeclan.JurassicPark.models.paddocks.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaddockRepository extends JpaRepository<Paddock,Long> {
}
