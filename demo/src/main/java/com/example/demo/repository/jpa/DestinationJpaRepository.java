package com.example.demo.repository.jpa;

import com.example.demo.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DestinationJpaRepository extends JpaRepository<Destination,Long> {
    @Query("select d from Destination d where d.destId=:destId ")
    Destination findByName(@Param("destId") Long destId);

    @Query("select d from Destination d where d.country=:country")
    Destination findByCountry(@Param("country") String country);

}