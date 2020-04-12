package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.repository.jpa.ReviewJpaRepository;
import mk.finki.ukim.wpproekt.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PersistentReviewServiceImpl implements ReviewService {
    private ReviewJpaRepository reviewJpaRepository;

    public PersistentReviewServiceImpl(ReviewJpaRepository reviewJpaRepository){
        this.reviewJpaRepository=reviewJpaRepository;
    }


    @Override
    public Review addNewReview(String title, String destinationName, String description) {
        Review newReview=new Review(title,destinationName,description);
        return reviewJpaRepository.save(newReview);
    }

    @Override
    public Review editReview(String title, String destinationName, String description) {

        Review existingReview=reviewJpaRepository.findAllByTitle(title);
        existingReview.setTitle(title);
        existingReview.setDescription(description);
        existingReview.setDestinationName(destinationName);

        return reviewJpaRepository.save(existingReview);
    }

    @Override
    public void deleteReview(String title) {

        Review oldReview=reviewJpaRepository.findAllByTitle(title);
        reviewJpaRepository.delete(oldReview);

    }

    @Override
    public Review getByTitle(String title) {
        return reviewJpaRepository.findAllByTitle(title);
    }

    @Override
    public List<Review> listReviews(String destination) {
        return reviewJpaRepository.getAllReviews(destination);
    }
}
