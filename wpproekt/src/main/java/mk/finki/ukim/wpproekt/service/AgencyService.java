package mk.finki.ukim.wpproekt.service;

import mk.finki.ukim.wpproekt.model.Agency;
import mk.finki.ukim.wpproekt.model.Arrangement;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;

import java.util.List;

public interface AgencyService {
    Agency addNewAgency(String agencyName, String location, String contactNo, String contactMail, List<Review> reviewList, List<User> userList, List<Arrangement> offers);
    Agency editAgency(String agencyName,String location,String contactNo,String contactMail,List<Review> reviewList,List<User> userList,List<Arrangement> offers);
    void deleteAgency(String agencyName);
    Agency getAgencyByName(String agencyName);
    List<Review> getSameTitle(String title1,String title2);
    List<User> getSameUsers(String name1,String name2);
    List<Arrangement> getSamePrices(float price1,float price2);


}
