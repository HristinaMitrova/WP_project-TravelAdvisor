package com.example.demo.web.rest;

import com.example.demo.model.Arrangement;
import com.example.demo.service.implpersistent.PersistentArrangementServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/rest/arrangements")
public class ArrangementRestfulResource {

    private PersistentArrangementServiceImpl persistentArrangementService;

    public ArrangementRestfulResource(PersistentArrangementServiceImpl persistentArrangementService){
        this.persistentArrangementService=persistentArrangementService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Arrangement createArrangement(@RequestParam("arrId") long arrId,
                                         @RequestParam("description") String description,
                                         @RequestParam("destination") String destination,
                                         @RequestParam("price") float price,
                                         HttpServletResponse response,
                                         UriComponentsBuilder builder){
        Arrangement newArrangement=persistentArrangementService.addNewArrangement(arrId,description,destination,price);


        response.setHeader("Location", builder.path("/rest/arrangements/{id}").buildAndExpand(newArrangement.getArrId()).toUriString());
        return newArrangement;
    }
    @PutMapping("/{arrId}")
    public Arrangement updateArrangement(@PathVariable long arrId,
                                         @RequestParam("description") String description,
                                         @RequestParam("destination") String destination,
                                         @RequestParam("price") float price){

        return persistentArrangementService.editArrangement(arrId,description,destination,price);
    }
    @DeleteMapping("/{arrId}")
    public void deleteArrangement(@PathVariable long arrId) {
        persistentArrangementService.deleteArrangement(arrId);
    }



    @GetMapping("/{arrId}")
    public Arrangement getArrangementById(@PathVariable long arrId){
        return persistentArrangementService.getArrangementById(arrId);
    }


    @GetMapping("/{price}")
    public List<Arrangement> getArrangementsCheaperThan(@PathVariable float price){

        return persistentArrangementService.listArrangements(price);
    }
}


