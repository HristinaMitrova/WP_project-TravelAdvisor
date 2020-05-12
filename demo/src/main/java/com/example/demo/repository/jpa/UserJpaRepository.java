package com.example.demo.repository.jpa;


import com.example.demo.model.Review;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserJpaRepository extends JpaRepository<User,Long> {

    User findById(long id);

    @Query("select u from User u where u.name=:name")
    User findByName(@Param("name") String name);

    @Query("select r from User u join u.reviews r where u.name=:user_Name")
    List<Review> getReviews(@Param("user_Name") String user_Name);



}