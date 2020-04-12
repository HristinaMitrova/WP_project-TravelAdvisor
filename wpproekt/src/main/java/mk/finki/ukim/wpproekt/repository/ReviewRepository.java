package mk.finki.ukim.wpproekt.repository;

import mk.finki.ukim.wpproekt.model.Review;

import java.util.List;

public interface ReviewRepository {
List<Review> getAllReviews();
Review save(Review review);
}
