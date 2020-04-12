package mk.finki.ukim.wpproekt.web.rest;

import mk.finki.ukim.wpproekt.model.Agency;
import mk.finki.ukim.wpproekt.model.Arrangement;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
import mk.finki.ukim.wpproekt.service.impl.PersistentAgencyServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/rest/agencies")
public class AgencyRestfulResource {

    private PersistentAgencyServiceImpl persistentAgencyService;

    public AgencyRestfulResource(PersistentAgencyServiceImpl persistentAgencyService){
        this.persistentAgencyService=persistentAgencyService;
    }



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Agency createAgency(@RequestParam("agencyName") String agencyName,
                               @RequestParam("location") String location,
                               @RequestParam("contactNo") String contactNo,
                               @RequestParam("contactMail") String contactMail,
                               @RequestParam("reviewList") List<Review> reviewList,
                               @RequestParam("userList") List<User> userList,
                               @RequestParam("offers") List<Arrangement> offers,
                               HttpServletResponse response,
                               UriComponentsBuilder builder){
        Agency newAgency=persistentAgencyService.addNewAgency(agencyName,location,contactNo,contactMail,reviewList,userList,offers);


        response.setHeader("Location", builder.path("/rest/agencies/{id}").buildAndExpand(newAgency.getAgencyName()).toUriString());
        return newAgency;
    }
    @PutMapping("/{agencyName}")
    public Agency updateAgency(@PathVariable String agencyName,
                               @RequestParam("location") String location,
                               @RequestParam("contactNo") String contactNo,
                               @RequestParam("contactMail") String contactMail,
                               @RequestParam("reviewList") List<Review> reviewList,
                               @RequestParam("userList") List<User> userList,
                               @RequestParam("offers") List<Arrangement> offers){
        return persistentAgencyService.editAgency(agencyName,location,contactNo,contactMail,reviewList,userList,offers);

    }
    @DeleteMapping("/{agencyName}")
    public void deleteAgency(@PathVariable String agencyName) {
        persistentAgencyService.deleteAgency(agencyName);

    }

    @GetMapping("/{agencyName}")
    public Agency getAgency(@PathVariable String agencyName){
        return persistentAgencyService.getAgencyByName(agencyName);
    }
    @GetMapping("/compare")
    public List<Arrangement> getArrangementssWithSamePrices(@RequestParam("price2") float price2,
                                               @RequestParam("price1") float price1){

        return persistentAgencyService.getSamePrices(price2,price1);

    }
    @GetMapping("/compare")
    public List<Review> getReviewsWithSameTitles(@RequestParam("title1") String title1,
                                                            @RequestParam("title2") String title2){

        return persistentAgencyService.getSameTitle(title1,title2);

    }
    @GetMapping("/compare")
    public List<User> getSameUsersFromAgencie(@RequestParam("name1") String name1,
                                                 @RequestParam("name2") String name2){

        return persistentAgencyService.getSameUsers(name1,name2);

    }







}
