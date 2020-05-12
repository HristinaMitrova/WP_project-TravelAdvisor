package com.example.demo.service;

import com.example.demo.model.Accommodation;
import com.example.demo.model.Destination;
import com.example.demo.model.Review;

import java.util.List;

public interface AccommodationService {
    Accommodation addNewAccPlace(long accId, String owner, int noRooms, float price, String description, Destination destination, List<Review> reviews);
    Accommodation editAccPlace(long accId,String owner,int noRooms,float price,String description,Destination destination,List<Review> reviews);
    void deleteAccPlace(long accId);
    Accommodation getAccPlaceByOwner(String owner);
    List<Accommodation> listAccPlaceWithNumRooms(int noRooms);
    Integer countAccPlacesByNoRooms(int noRooms);
    Accommodation getAccPlaceById(long id);

}
