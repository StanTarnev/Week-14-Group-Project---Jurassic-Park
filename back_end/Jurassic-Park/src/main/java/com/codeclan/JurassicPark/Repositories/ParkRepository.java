package com.codeclan.JurassicPark.Repositories;

import com.codeclan.JurassicPark.models.Park;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ParkRepository extends JpaRepository<Park,Long> {
}
