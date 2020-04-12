package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Accommodation;
import mk.finki.ukim.wpproekt.model.Destination;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.repository.AccomodationRepository;
import mk.finki.ukim.wpproekt.service.AccomodationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccomodationServiceImpl implements AccomodationService {
    private final AccomodationRepository accomodationRepository;
    public AccomodationServiceImpl(AccomodationRepository accomodationRepository){this.accomodationRepository=accomodationRepository;}
    @Override
    public Accommodation addNewAccPlace(long accId, String owner, int noRooms, float price, String description, Destination destination, List<Review> reviews) {
        System.out.println("[WP-Log] adding new Accomodation-Place from AccomodationServiceImpl");
        Accommodation accommodation= new Accommodation(accId,owner,noRooms,price,description,destination,reviews);
        return this.accomodationRepository.save(accommodation);
    }

    @Override
    public Accommodation editAccPlace(long accId, String owner, int noRooms, float price, String description, Destination destination, List<Review> reviews) {
        return null;
    }

    @Override
    public void deleteAccPlace(long accId) {

    }

    @Override
    public Accommodation getAccPlaceByOwner(String owner) {
        return null;
    }

    @Override
    public List<Accommodation> listAccPlaceWithNumRooms(int noRooms) {
        return null;
    }

    @Override
    public Integer countAccPlacesByNoRooms(int noRooms) {
        return null;
    }

    @Override
    public Accommodation getAccPlaceById(long id) {
        return null;
    }
}
