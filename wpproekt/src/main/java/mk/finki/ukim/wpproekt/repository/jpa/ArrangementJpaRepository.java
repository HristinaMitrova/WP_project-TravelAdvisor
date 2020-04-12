package mk.finki.ukim.wpproekt.repository.jpa;

import mk.finki.ukim.wpproekt.model.Arrangement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArrangementJpaRepository extends JpaRepository<Arrangement,Long> {

    Arrangement findByname(Long id);

    @Query("select count (a) from Arrangement a where a.price<=price")
    List<Arrangement> getAllCheaperThan(@Param("price") float price);

}
