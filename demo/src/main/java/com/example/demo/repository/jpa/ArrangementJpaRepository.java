package com.example.demo.repository.jpa;

import com.example.demo.model.Arrangement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArrangementJpaRepository extends JpaRepository<Arrangement,Long> {
    @Query("select n from Arrangement n where n.arrId=:arrId")
    Arrangement findByName(@Param("arrId") Long arrId);

    @Query("select count (a) from Arrangement a where a.price<=price")
    List<Arrangement> getAllCheaperThan(@Param("price") float price);

}