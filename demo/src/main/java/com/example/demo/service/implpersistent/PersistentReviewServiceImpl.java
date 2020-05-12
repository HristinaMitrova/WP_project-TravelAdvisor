package com.example.demo.service.implpersistent;

import com.example.demo.model.Review;
import com.example.demo.repository.jpa.ReviewJpaRepository;
import com.example.demo.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersistentReviewServiceImpl implements ReviewService {
    private ReviewJpaRepository reviewJpaRepository;

    public PersistentReviewServiceImpl(ReviewJpaRepository reviewJpaRepository){
        this.reviewJpaRepository=reviewJpaRepository;
    }




    @Override
    public Review editReview(long id, String title, String destinationName, String description) {
        Review existingReview=reviewJpaRepository.findAllByTitle(title);
        existingReview.setTitle(title);
        existingReview.setDescription(description);
        existingReview.setDestinationName(destinationName);

        return reviewJpaRepository.save(existingReview);
    }

    @Override
    public Review addNewReview(long id,String title, String destinationName, String description) {
        Review newReview=new Review(id,title,destinationName,description);
        return reviewJpaRepository.save(newReview);
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

