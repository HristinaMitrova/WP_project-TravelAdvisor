package com.example.demo.web.rest;

import com.example.demo.model.Destination;
import com.example.demo.model.Review;
import com.example.demo.service.implpersistent.PersistentDestinationServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/rest/destinations")
public class DestinationRestfulResource {
    private PersistentDestinationServiceImpl persistentDestinationService;

    public DestinationRestfulResource(PersistentDestinationServiceImpl persistentDestinationService){
        this.persistentDestinationService=persistentDestinationService;
    }



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Destination createDestination(@RequestParam("destId") long destId,
                                         @RequestParam("country") String country,
                                         @RequestParam("cityPlace") String cityPlace,
                                         @RequestParam("reviewList") List<Review> reviewList,
                                         HttpServletResponse response,
                                         UriComponentsBuilder builder){
        Destination newDestination=persistentDestinationService.addNewDestination(destId,country,cityPlace,reviewList);


        response.setHeader("Location", builder.path("/rest/destinations/{id}").buildAndExpand(newDestination.getDestId()).toUriString());
        return newDestination;
    }
    @PutMapping("/{destId}")
    public Destination updateDestination(@PathVariable long destId,
                                         @RequestParam("country") String country,
                                         @RequestParam("cityPlace") String cityPlace,
                                         @RequestParam("reviewList") List<Review> reviewList){

        return persistentDestinationService.editDestination(destId,country,cityPlace,reviewList);
    }
    @DeleteMapping("/{destId}")
    public void deleteDestination(@PathVariable long destId) {
        persistentDestinationService.deleteDestination(destId);
    }

    @GetMapping("/{destId}")
    public Destination getDestination(@PathVariable long destId){
        return persistentDestinationService.getDestinationById(destId);
    }


    @GetMapping("/{country}")
    public Destination getDestinationByCountry(@PathVariable String country){
        return persistentDestinationService.getDestinationByCountry(country);

    }

}


