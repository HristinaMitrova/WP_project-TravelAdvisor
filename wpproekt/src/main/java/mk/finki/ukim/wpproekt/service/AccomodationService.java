package mk.finki.ukim.wpproekt.service;

import mk.finki.ukim.wpproekt.model.Accommodation;
import mk.finki.ukim.wpproekt.model.Destination;
import mk.finki.ukim.wpproekt.model.Review;

import java.util.List;

public interface AccomodationService {
    Accommodation addNewAccPlace(long accId, String owner, int noRooms, float price, String description, Destination destination, List<Review> reviews);
    Accommodation editAccPlace(long accId,String owner,int noRooms,float price,String description,Destination destination,List<Review> reviews);
    void deleteAccPlace(long accId);
    Accommodation getAccPlaceByOwner(String owner);
    List<Accommodation> listAccPlaceWithNumRooms(int noRooms);
    Integer countAccPlacesByNoRooms(int noRooms);
    Accommodation getAccPlaceById(long id);

}
