package mk.finki.ukim.wpproekt.repository.InMemoryImpl;

import mk.finki.ukim.wpproekt.bootstrap.DataHolder;
import mk.finki.ukim.wpproekt.model.Arrangement;
import mk.finki.ukim.wpproekt.repository.ArrangementRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class InMemoryArrangementRepositoryImpl implements ArrangementRepository {
    @Override
    public List<Arrangement> getAllArrangements() {
        return null;
    }

    @Override
    public Arrangement save(Arrangement arrangement) {
        System.out.println("[WP-Log] {save from InMemoryArrangementRepositoryImpl}");
        DataHolder.arrangements.add(arrangement);
        return arrangement;
    }
}
