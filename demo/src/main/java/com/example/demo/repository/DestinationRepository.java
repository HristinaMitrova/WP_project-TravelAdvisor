package com.example.demo.repository;

import com.example.demo.model.Destination;

import java.util.List;


public interface DestinationRepository {
    List<Destination> getAllDestinations();
    Destination save(Destination destination);

}