package com.example.demo.service.implpersistent;

import com.example.demo.model.Accommodation;
import com.example.demo.model.Destination;
import com.example.demo.model.Review;
import com.example.demo.repository.jpa.AccommodationJpaRepository;
import com.example.demo.service.AccommodationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersistentAccommodationServiceImpl implements AccommodationService {
    private AccommodationJpaRepository accommodationJpaRepository;

    public PersistentAccommodationServiceImpl(AccommodationJpaRepository accommodationJpaRepository){
        this.accommodationJpaRepository=accommodationJpaRepository;
    }
    @Override
    public Accommodation addNewAccPlace(long accId, String owner, int noRooms, float price, String description, Destination destination, List<Review> reviews) {
        Accommodation newAccomodation=new Accommodation(accId,owner,noRooms,price,description,destination,reviews);
        return accommodationJpaRepository.save(newAccomodation);
    }

    @Override
    public Accommodation editAccPlace(long accId, String owner, int noRooms, float price, String description, Destination destination, List<Review> reviews) {
        Accommodation existingAccomodation=accommodationJpaRepository.findAllByName(accId);
        existingAccomodation.setDescription(description);
        existingAccomodation.setOwner(owner);
        existingAccomodation.setNoRooms(noRooms);
        existingAccomodation.setPrice(price);
        existingAccomodation.setReviews(reviews);
        return accommodationJpaRepository.save(existingAccomodation);
    }

    @Override
    public void deleteAccPlace(long accId) {
        Accommodation oldAccomodation=accommodationJpaRepository.findAllByName(accId);
        accommodationJpaRepository.delete(oldAccomodation);

    }

    @Override
    public Accommodation getAccPlaceByOwner(String owner) {
        return accommodationJpaRepository.findAllByOwner(owner);
    }

    @Override
    public List<Accommodation> listAccPlaceWithNumRooms(int noRooms) {
        List<Accommodation> accList= accommodationJpaRepository.getAccommodationByNoRooms(noRooms);
        return accList;
    }

    @Override
    public Integer countAccPlacesByNoRooms(int noRooms) {
        return accommodationJpaRepository.getNumByNumRooms(noRooms);
    }

    @Override
    public Accommodation getAccPlaceById(long id) {
        return accommodationJpaRepository.findAllByName(id);
    }
}

