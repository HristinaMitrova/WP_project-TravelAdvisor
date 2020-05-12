package com.example.demo.repository.jpa;

import com.example.demo.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewJpaRepository extends JpaRepository<Review,String> {
    @Query("select r from Review r where r.title=:title ")
    Review findAllByTitle(@Param("title") String title);

    @Query("select r from Review r where r.destinationName=:destinationName")
    Review findAllByDestinationName(@Param("destinationName") String destName);

    //Review findAllByTitle(String title);

    @Query("select r from Review r where r.destinationName=:destination")
    List<Review> getAllReviews(@Param("destination") String destination);

}