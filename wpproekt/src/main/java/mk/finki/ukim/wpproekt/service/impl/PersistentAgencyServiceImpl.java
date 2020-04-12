package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Agency;
import mk.finki.ukim.wpproekt.model.Arrangement;
import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
import mk.finki.ukim.wpproekt.repository.jpa.AgencyJpaRepository;
import mk.finki.ukim.wpproekt.service.AgencyService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PersistentAgencyServiceImpl implements AgencyService {
    private AgencyJpaRepository agencyJpaRepository;

    public PersistentAgencyServiceImpl(AgencyJpaRepository agencyJpaRepository){
        this.agencyJpaRepository=agencyJpaRepository;
    }
    @Override
    public Agency addNewAgency(String agencyName, String location, String contactNo, String contactMail, List<Review> reviewList, List<User> userList, List<Arrangement> offers) {
        Agency newAgency=new Agency(agencyName,location,contactNo,contactMail,reviewList,userList,offers);
        return agencyJpaRepository.save(newAgency);
    }

    @Override
    public Agency editAgency(String agencyName, String location, String contactNo, String contactMail, List<Review> reviewList, List<User> userList, List<Arrangement> offers) {
        Agency existingAgency=agencyJpaRepository.findAllByName(agencyName);
        existingAgency.setAgencyName(agencyName);
        existingAgency.setContactMail(contactMail);
        existingAgency.setContactNo(contactNo);
        existingAgency.setOffers(offers);
        existingAgency.setReviewList(reviewList);
        existingAgency.setuserList(userList);
        return agencyJpaRepository.save(existingAgency);
    }

    @Override
    public void deleteAgency(String agencyName) {
        Agency oldAgency=agencyJpaRepository.findAllByName(agencyName);
        agencyJpaRepository.delete(oldAgency);

    }

    @Override
    public Agency getAgencyByName(String agencyName) {

        return agencyJpaRepository.findAllByName(agencyName);
    }

    @Override
    public List<Review> getSameTitle(String title1, String title2) {
        List<Review> revList1=agencyJpaRepository.getReviews(title1);
        List<Review> revList2=agencyJpaRepository.getReviews(title2);
        revList1.retainAll(revList2);
        return  revList1;

    }

    @Override
    public List<User> getSameUsers(String name1, String name2) {
        List<User> userList1=agencyJpaRepository.getUsers(name1);
        List<User> userList2=agencyJpaRepository.getUsers(name2);
        userList1.retainAll(userList2);
        return userList1;

    }

    @Override
    public List<Arrangement> getSamePrices(float price1, float price2) {
        List<Arrangement> arrangementList1=agencyJpaRepository.getOffers(price1);
        List<Arrangement> arrangementList2=agencyJpaRepository.getOffers(price2);
        arrangementList1.retainAll(arrangementList2);
        return arrangementList1;

    }
}
