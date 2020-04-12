package mk.finki.ukim.wpproekt.service;

import mk.finki.ukim.wpproekt.model.Review;

import java.util.List;

public interface ReviewService {
Review addNewReview(String title,String destinationName,String description);
Review editReview(String title,String destinationName,String description);
void deleteReview(String title);
Review getByTitle(String title);
List<Review> listReviews(String destination);
}
