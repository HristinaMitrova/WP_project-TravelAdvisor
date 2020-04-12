package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Arrangement;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.repository.ArrangementRepository;
import mk.finki.ukim.wpproekt.service.ArrangementService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArrangementServiceImpl implements ArrangementService {
    private final ArrangementRepository arrangementRepository;
    public ArrangementServiceImpl(ArrangementRepository arrangementRepository){
        this.arrangementRepository=arrangementRepository;
    }

    @Override
    public Arrangement addNewArrangement(long arrId, String description, String destination, float price) {
        System.out.println("[WP-Log] adding new arrangement from ArrangementServiceImpl");
        Arrangement arrangement= new Arrangement(arrId,description,destination,price);
        return this.arrangementRepository.save(arrangement);
    }

    @Override
    public Arrangement editArrangement(long arrId, String description, String destination, float price) {
        return null;
    }

    @Override
    public void deleteArrangement(long arrId) {

    }

    @Override
    public Arrangement getArrangementById(long arrId) {
        return null;
    }

    @Override
    public List<Arrangement> listArrangements(float price) {
        return null;
    }


}
