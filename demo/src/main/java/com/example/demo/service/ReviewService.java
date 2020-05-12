package com.example.demo.service;

import com.example.demo.model.Review;

import java.util.List;

public interface ReviewService {
    Review addNewReview(long id,String title, String destinationName, String description);
    Review editReview(long id,String title,String destinationName,String description);
    void deleteReview(String title);
    Review getByTitle(String title);
    List<Review> listReviews(String destination);
}
