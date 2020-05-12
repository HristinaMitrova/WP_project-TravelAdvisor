package com.example.demo.service.implpersistent;

import com.example.demo.model.Arrangement;
import com.example.demo.repository.jpa.ArrangementJpaRepository;
import com.example.demo.service.ArrangementService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersistentArrangementServiceImpl implements ArrangementService {
    private ArrangementJpaRepository arrangementJpaRepository;

    public PersistentArrangementServiceImpl(ArrangementJpaRepository arrangementJpaRepository){
        this.arrangementJpaRepository=arrangementJpaRepository;
    }
    @Override
    public Arrangement addNewArrangement(long arrId, String description, String destination, float price) {

        Arrangement newArrangement=new Arrangement(arrId,description,destination,price);
        return arrangementJpaRepository.save(newArrangement);

    }

    @Override
    public Arrangement editArrangement(long arrId, String description, String destination, float price) {
        Arrangement existingArrangement=arrangementJpaRepository.findByName(arrId);
        existingArrangement.setDescription(description);
        existingArrangement.setDestination(destination);
        existingArrangement.setPrice(price);
        return arrangementJpaRepository.save(existingArrangement);
    }



    @Override
    public void deleteArrangement(long arrId) {
        Arrangement oldArrangement=arrangementJpaRepository.findByName(arrId);
        arrangementJpaRepository.delete(oldArrangement);

    }

    @Override
    public Arrangement getArrangementById(long arrId) {
        return arrangementJpaRepository.findByName(arrId);
    }

    @Override
    public List<Arrangement> listArrangements(float price) {
        return arrangementJpaRepository.getAllCheaperThan(price);
    }
}

