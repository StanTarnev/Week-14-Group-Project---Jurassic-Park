package com.codeclan.JurassicPark.Repositories;

import com.codeclan.JurassicPark.models.visitor.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VisitorRepository extends JpaRepository<Visitor,Long> {
}
