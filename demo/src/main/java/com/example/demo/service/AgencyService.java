package com.example.demo.service;

import com.example.demo.model.Agency;
import com.example.demo.model.Arrangement;
import com.example.demo.model.Review;
import com.example.demo.model.User;

import java.util.List;

public interface AgencyService {
    Agency addNewAgency(long id,String agencyName, String location, String contactNo, String contactMail, List<Review> reviewList, List<User> userList, List<Arrangement> offers);
    Agency editAgency(long id,String agencyName,String location,String contactNo,String contactMail,List<Review> reviewList,List<User> userList,List<Arrangement> offers);
    void deleteAgency(String agencyName);
    Agency getAgencyByName(String agencyName);
    List<Review> getSameTitle(String title1, String title2);
    List<User> getSameUsers(String name1, String name2);
    List<Arrangement> getSamePrices(float price1, float price2);


}