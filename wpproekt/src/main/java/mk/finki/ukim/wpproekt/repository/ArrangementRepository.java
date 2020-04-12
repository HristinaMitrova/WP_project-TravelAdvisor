package mk.finki.ukim.wpproekt.repository;

import mk.finki.ukim.wpproekt.model.Arrangement;

import java.util.List;

public interface ArrangementRepository {
    List<Arrangement> getAllArrangements();
    Arrangement save(Arrangement arrangement);
}
