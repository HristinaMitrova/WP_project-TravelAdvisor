package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.repository.ReviewRepository;
import mk.finki.ukim.wpproekt.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository){this.reviewRepository=reviewRepository;}

    @Override
    public Review addNewReview(String title, String destinationName, String description) {

        System.out.println("[WP-Log] adding new review from ReviewServiceImpl");
        Review review= new Review(title,destinationName,description);
        return this.reviewRepository.save(review);
    }

    @Override
    public Review editReview(String title, String destinationName, String description) {
        return null;
    }

    @Override
    public void deleteReview(String title) {

    }

    @Override
    public Review getByTitle(String title) {
        return null;
    }

    @Override
    public List<Review> listReviews(String destination) {
        return null;
    }


}
