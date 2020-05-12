package com.example.demo.service.implpersistent;

import com.example.demo.model.Destination;
import com.example.demo.model.Review;
import com.example.demo.repository.jpa.DestinationJpaRepository;
import com.example.demo.service.DestinationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersistentDestinationServiceImpl implements DestinationService {
    private DestinationJpaRepository destinationJpaRepository;
    public PersistentDestinationServiceImpl(DestinationJpaRepository destinationJpaRepository){
        this.destinationJpaRepository=destinationJpaRepository;
    }
    @Override
    public Destination addNewDestination(long destId, String country, String cityPlace, List<Review> reviewList) {

        Destination newDestination=new Destination(destId,country,cityPlace,reviewList);
        return destinationJpaRepository.save(newDestination);
    }

    @Override
    public Destination editDestination(long destId, String country, String cityPlace, List<Review> reviewList) {

        Destination existingDestination=destinationJpaRepository.findByName(destId);
        existingDestination.setCountry(country);
        existingDestination.setcityPlace(cityPlace);
        existingDestination.setReviewList(reviewList);

        return destinationJpaRepository.save(existingDestination);
    }

    @Override
    public void deleteDestination(long destId) {

        Destination oldDestination=destinationJpaRepository.findByName(destId);
        destinationJpaRepository.delete(oldDestination);

    }

    @Override
    public Destination getDestinationById(long destId) {
        return destinationJpaRepository.findByName(destId);
    }

    @Override
    public Destination getDestinationByCountry(String country) {
        return destinationJpaRepository.findByCountry(country);
    }
}

