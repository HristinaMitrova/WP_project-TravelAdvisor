package com.example.demo.repository;

import com.example.demo.model.Agency;

import java.util.List;

public interface AgencyRepository {
    List<Agency> getAllAgencies();
    Agency save(Agency agency);
}
