package com.example.demo.repository;

import com.example.demo.model.Accommodation;

import java.util.List;

public interface AccommodationRepository {
    List<Accommodation> getAllAccomodations();
    Accommodation save(Accommodation accommodation);
}