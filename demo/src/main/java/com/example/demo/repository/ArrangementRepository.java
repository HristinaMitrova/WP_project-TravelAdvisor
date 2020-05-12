package com.example.demo.repository;


import com.example.demo.model.Arrangement;

import java.util.List;

public interface ArrangementRepository {
    List<Arrangement> getAllArrangements();
    Arrangement save(Arrangement arrangement);
}