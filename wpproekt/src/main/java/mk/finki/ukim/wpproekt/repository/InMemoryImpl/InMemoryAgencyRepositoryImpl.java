package mk.finki.ukim.wpproekt.repository.InMemoryImpl;

import mk.finki.ukim.wpproekt.bootstrap.DataHolder;
import mk.finki.ukim.wpproekt.model.Agency;
import mk.finki.ukim.wpproekt.repository.AgencyRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class InMemoryAgencyRepositoryImpl implements AgencyRepository {


    @Override
    public List<Agency> getAllAgencies() {
        return null;
    }

    @Override
    public Agency save(Agency agency) {
        System.out.println("[WP-Log] {save from InMemoryAgencyRepositoryImpl}");
        DataHolder.agencies.add(agency);
        return agency;
    }
}
