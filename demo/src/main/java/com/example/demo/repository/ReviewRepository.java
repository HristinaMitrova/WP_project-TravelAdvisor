package com.example.demo.repository;

import com.example.demo.model.Review;

import java.util.List;

public interface ReviewRepository {
    List<Review> getAllReviews();
    Review save(Review review);
}
