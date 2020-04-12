package mk.finki.ukim.wpproekt.service;

import mk.finki.ukim.wpproekt.model.Arrangement;

import java.util.List;

public interface ArrangementService {
Arrangement addNewArrangement(long arrId,String description,String destination,float price);
Arrangement editArrangement(long arrId,String description,String destination,float price);
void deleteArrangement(long arrId);
Arrangement getArrangementById(long arrId);
List<Arrangement> listArrangements(float price);

}
