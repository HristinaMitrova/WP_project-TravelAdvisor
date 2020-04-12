package mk.finki.ukim.wpproekt.repository.jpa;

import mk.finki.ukim.wpproekt.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewJpaRepository extends JpaRepository<Review,String> {
Review findAllByName(String destination);
    Review findAllByTitle(String title);
    @Query("select r from Review r join r.destinationName d group by r having count(r)=:destination")
    List<Review> getAllReviews(@Param("destination") String destination);

}
