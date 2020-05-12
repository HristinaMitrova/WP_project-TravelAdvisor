package com.example.demo.service;


import com.example.demo.model.Destination;
import com.example.demo.model.Review;

import java.util.List;

public interface DestinationService {
    Destination addNewDestination(long destId, String country, String cityPlace, List<Review> reviewList);
    Destination editDestination(long destId,String country,String cityPlace,List<Review> reviewList);
    void deleteDestination(long destId);
    Destination getDestinationById(long destId);
    Destination getDestinationByCountry(String country);
}
