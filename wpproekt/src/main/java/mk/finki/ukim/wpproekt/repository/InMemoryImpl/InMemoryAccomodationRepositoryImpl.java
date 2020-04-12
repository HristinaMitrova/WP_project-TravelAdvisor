package mk.finki.ukim.wpproekt.repository.InMemoryImpl;

import mk.finki.ukim.wpproekt.bootstrap.DataHolder;
import mk.finki.ukim.wpproekt.model.Accommodation;
import mk.finki.ukim.wpproekt.repository.AccomodationRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class InMemoryAccomodationRepositoryImpl implements AccomodationRepository {
    @Override
    public List<Accommodation> getAllAccomodations() {
        return null;
    }

    @Override
    public Accommodation save(Accommodation accommodation) {

        System.out.println("[WP-Log] {save from InMemoryAccomodationRepositoryImpl}");
        DataHolder.accommodations.add(accommodation);
        return accommodation;
    }
}
