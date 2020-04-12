package mk.finki.ukim.wpproekt.repository.jpa;

import mk.finki.ukim.wpproekt.model.Accommodation;
import mk.finki.ukim.wpproekt.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AccommodationJpaRepository extends JpaRepository<Accommodation,Long> {
    Accommodation findAllByName(Long id);

    Accommodation findAllByOwner(String owner);

    @Query("select a from Accommodation a join a.noRooms nr where u.noRooms=:noRooms")
    List<Accommodation> getAccommodationByNoRooms(@Param("noRooms") int noRooms);

    @Query("select count (a) from Accommodation  a where a.noRooms=num")
    Integer getNumByNumRooms(int num);
}
