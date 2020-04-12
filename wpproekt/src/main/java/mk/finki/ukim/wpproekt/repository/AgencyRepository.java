package mk.finki.ukim.wpproekt.repository;

import mk.finki.ukim.wpproekt.model.Agency;

import java.util.List;

public interface AgencyRepository {
    List<Agency> getAllAgencies();
    Agency save(Agency agency);
}
