package mk.finki.ukim.wpproekt.service;

import mk.finki.ukim.wpproekt.model.Destination;
import mk.finki.ukim.wpproekt.model.Review;

import java.util.List;

public interface DestinationService {
    Destination addNewDestination(long destId,String country,String cityPlace,List<Review> reviewList);
    Destination editDestination(long destId,String country,String cityPlace,List<Review> reviewList);
    void deleteDestination(long destId);
    Destination getDestinationById(long destId);
    Destination getDestinationByCountry(String country);
}
