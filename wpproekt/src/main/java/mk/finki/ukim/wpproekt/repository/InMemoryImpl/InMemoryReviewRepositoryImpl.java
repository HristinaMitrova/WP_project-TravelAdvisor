package mk.finki.ukim.wpproekt.repository.InMemoryImpl;

import mk.finki.ukim.wpproekt.bootstrap.DataHolder;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.repository.ReviewRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class InMemoryReviewRepositoryImpl implements ReviewRepository {
    @Override
    public List<Review> getAllReviews() {
        return new ArrayList<>(DataHolder.reviews);
    }

    @Override
    public Review save(Review review) {
        System.out.println("[WP-Log] {save from InMemoryReviewRepositoryImpl}");
        DataHolder.reviews.add(review);
        return review;
    }
}
