package mk.finki.ukim.wpproekt.repository;

import mk.finki.ukim.wpproekt.model.Destination;

import java.util.List;
import java.util.Optional;

public interface DestinationRepository {
    List<Destination> getAllDestinations();
    Destination save(Destination destination);

}
