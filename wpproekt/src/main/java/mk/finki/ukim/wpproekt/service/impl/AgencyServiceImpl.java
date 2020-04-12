package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Agency;
import mk.finki.ukim.wpproekt.model.Arrangement;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
import mk.finki.ukim.wpproekt.repository.AgencyRepository;
import mk.finki.ukim.wpproekt.service.AgencyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgencyServiceImpl implements AgencyService {
    private final AgencyRepository agencyRepository;
    public AgencyServiceImpl(AgencyRepository agencyRepository){this.agencyRepository=agencyRepository;}
    @Override
    public Agency addNewAgency(String agencyName, String location, String contactNo, String contactMail, List<Review> reviewList, List<User> userList, List<Arrangement> offers) {
        System.out.println("[WP-Log] adding new Agency from AgencyServiceImpl");
        Agency agency= new Agency(agencyName,location,contactNo,contactMail,reviewList,userList,offers);
        return this.agencyRepository.save(agency);
    }

    @Override
    public Agency editAgency(String agencyName, String location, String contactNo, String contactMail, List<Review> reviewList, List<User> userList, List<Arrangement> offers) {
        return null;
    }

    @Override
    public void deleteAgency(String agencyName) {

    }

    @Override
    public Agency getAgencyByName(String agencyName) {
        return null;
    }

    @Override
    public List<Review> getSameTitle(String title1, String title2) {
        return null;
    }

    @Override
    public List<User> getSameUsers(String name1, String name2) {
        return null;
    }

    @Override
    public List<Arrangement> getSamePrices(float price1, float price2) {
        return null;
    }
}
