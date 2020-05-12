package com.example.demo.service;
import com.example.demo.model.Arrangement;

import java.util.List;

public interface ArrangementService {
    Arrangement addNewArrangement(long arrId,String description,String destination,float price);
    Arrangement editArrangement(long arrId, String description, String destination, float price);
    void deleteArrangement(long arrId);
    Arrangement getArrangementById(long arrId);
    List<Arrangement> listArrangements(float price);

}
