package mk.finki.ukim.wpproekt.repository;

import mk.finki.ukim.wpproekt.model.Accommodation;

import java.util.List;

public interface AccomodationRepository {
    List<Accommodation> getAllAccomodations();
    Accommodation save(Accommodation accommodation);
}
