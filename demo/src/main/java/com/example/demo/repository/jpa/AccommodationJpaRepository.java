package com.example.demo.repository.jpa;

import com.example.demo.model.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AccommodationJpaRepository extends JpaRepository<Accommodation,Long> {
    @Query("select n from Accommodation n where n.accId=:accId")
    Accommodation findAllByName(@Param("accId") Long accId);

    @Query("select n from Accommodation n where n.owner=:owner")
    Accommodation findAllByOwner(@Param("owner") String owner);

    @Query("select a from Accommodation a  where a.noRooms=:noRooms")
    List<Accommodation> getAccommodationByNoRooms(@Param("noRooms") int noRooms);

    @Query("select count (a) from Accommodation  a where a.noRooms=:num")
    Integer getNumByNumRooms(@Param("num")int num);
}
