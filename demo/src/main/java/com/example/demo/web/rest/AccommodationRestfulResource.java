package com.example.demo.web.rest;

import com.example.demo.model.Accommodation;
import com.example.demo.model.Destination;
import com.example.demo.model.Review;
import com.example.demo.service.implpersistent.PersistentAccommodationServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/rest/accommodations")
public class AccommodationRestfulResource {
    private PersistentAccommodationServiceImpl persistentAccomodationService;
    public AccommodationRestfulResource(PersistentAccommodationServiceImpl persistentAccomodationService){
        this.persistentAccomodationService=persistentAccomodationService;
    }



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Accommodation createAccomodation(@RequestParam("accId") long accId,

                                            @RequestParam("owner") String owner,
                                            @RequestParam("noRooms") int noRooms,
                                            @RequestParam("price") float price,
                                            @RequestParam("description") String description,
                                            @RequestParam("destination") Destination destination,
                                            @RequestParam("reviews") List<Review> reviews,
                                            HttpServletResponse response,
                                            UriComponentsBuilder builder){
        Accommodation newAccomodation=persistentAccomodationService.addNewAccPlace(accId,owner,noRooms,price,description,destination,reviews);



        response.setHeader("Location", builder.path("/rest/accommodations/{id}").buildAndExpand(newAccomodation.getAccId()).toUriString());
        return newAccomodation;
    }
    @PutMapping("/{accId}")
    public Accommodation updateAccomodation(@PathVariable long accId,
                                            @RequestParam("owner") String owner,
                                            @RequestParam("noRooms") int noRooms,
                                            @RequestParam("price") float price,
                                            @RequestParam("description") String description,
                                            @RequestParam("destination") Destination destination,
                                            @RequestParam("reviews") List<Review> reviews){
        return persistentAccomodationService.editAccPlace(accId,owner,noRooms,price,description,destination,reviews);

    }
    @DeleteMapping("/{accId}")
    public void deletAccomodation(@PathVariable long accId) {
        persistentAccomodationService.deleteAccPlace(accId);

    }

    @GetMapping("/{accId}")
    public Accommodation getAccomodation(@PathVariable long accId){
        return persistentAccomodationService.getAccPlaceById(accId);
    }
    @GetMapping("/{noRooms}")
    public Integer getNumAccomodations(@PathVariable int noRooms){
        return persistentAccomodationService.countAccPlacesByNoRooms(noRooms);
    }
    @GetMapping("/{owner}")
    public Accommodation getAccomodationByOwner(@PathVariable String owner){
        return persistentAccomodationService.getAccPlaceByOwner(owner);
    }
    @GetMapping("/{noRooms}")
    public List<Accommodation> getAccommodationByNoRooms(@PathVariable int noRooms){
        return persistentAccomodationService.listAccPlaceWithNumRooms(noRooms);
    }






}

