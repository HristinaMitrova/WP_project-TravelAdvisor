package mk.finki.ukim.wpproekt.repository.InMemoryImpl;

import mk.finki.ukim.wpproekt.bootstrap.DataHolder;
import mk.finki.ukim.wpproekt.model.Destination;
import mk.finki.ukim.wpproekt.repository.DestinationRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class InMemoryDestinationRepositoryImpl implements DestinationRepository {
    @Override
    public List<Destination> getAllDestinations() {
        return null;
    }

    @Override
    public Destination save(Destination destination) {
        System.out.println("[WP-Log] {save from InMemoryDestinationRepositoryImpl}");
        DataHolder.destinations.add(destination);
        return destination;
    }
}
