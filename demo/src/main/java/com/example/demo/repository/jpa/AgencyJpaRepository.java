package com.example.demo.repository.jpa;


import com.example.demo.model.Agency;
import com.example.demo.model.Arrangement;
import com.example.demo.model.Review;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface AgencyJpaRepository extends JpaRepository<Agency,String> {
    @Query("select a from Agency a where a.agencyName=:agencyName ")
    Agency findAllByName(@Param("agencyName") String agencyName);

    @Query("select a from Agency a join a.reviewList rl where a.reviewList=:title")
    List<Review> getReviews(@Param("title") String title);

    @Query("select a from Agency a join a.userList ul where a.userList=:user_name")
    List<User> getUsers(@Param("user_name") String user_name);

    @Query("select a from Agency a join a.offers ol where a.offers=:offer_price")
    List<Arrangement> getOffers(@Param("offer_price") float offer_price);

    @Query("select count (a) from Agency a where a.location=Skopje")
    Integer getNumAgenciesFromSkopje();
}
