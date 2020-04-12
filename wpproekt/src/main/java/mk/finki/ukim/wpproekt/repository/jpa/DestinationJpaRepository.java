package mk.finki.ukim.wpproekt.repository.jpa;

import mk.finki.ukim.wpproekt.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationJpaRepository extends JpaRepository<Destination,Long> {
  Destination findByName(Long destId);
  Destination findByCountry(String country);

}
