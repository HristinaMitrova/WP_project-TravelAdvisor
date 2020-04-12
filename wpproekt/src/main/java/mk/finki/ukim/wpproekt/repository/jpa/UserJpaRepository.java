package mk.finki.ukim.wpproekt.repository.jpa;

import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserJpaRepository extends JpaRepository<User,Long> {

    User findByName(Long id);

    @Query("select r from User u join u.reviews r where u.name=:name")
    List<Review> getReviews(@Param("user_Name") String name);
}
