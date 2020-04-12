package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Destination;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.repository.DestinationRepository;
import mk.finki.ukim.wpproekt.service.DestinationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationServiceImpl implements DestinationService {
    private final DestinationRepository destinationRepository;
    public DestinationServiceImpl(DestinationRepository destinationRepository){this.destinationRepository=destinationRepository;}

    @Override
    public Destination addNewDestination(long destId, String country, String cityPlace, List<Review> reviewList) {
        System.out.println("[WP-Log] adding new destination from DestinationServiceImpl");
        Destination destination= new Destination(destId,country,cityPlace,reviewList);
        return this.destinationRepository.save(destination);
    }

    @Override
    public Destination editDestination(long destId, String country, String cityPlace, List<Review> reviewList) {
        return null;
    }

    @Override
    public void deleteDestination(long destId) {

    }

    @Override
    public Destination getDestinationById(long destId) {
        return null;
    }

    @Override
    public Destination getDestinationByCountry(String country) {
        return null;
    }
}
