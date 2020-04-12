package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
import mk.finki.ukim.wpproekt.repository.jpa.ReviewJpaRepository;
import mk.finki.ukim.wpproekt.repository.jpa.UserJpaRepository;
import mk.finki.ukim.wpproekt.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersistentUserServiceImpl implements UserService {
    private UserJpaRepository userJpaRepository;
    private ReviewJpaRepository reviewJpaRepository;

    public PersistentUserServiceImpl(UserJpaRepository userJpaRepository,ReviewJpaRepository reviewJpaRepository){
        this.userJpaRepository=userJpaRepository;
        this.reviewJpaRepository=reviewJpaRepository;
    }
    @Override
    public User addnewUser(long id, String name, String address, String noPhone, String email, List<Review> reviews) {
        //List<Review> reviews1=new ArrayList<>();
        //Review review=reviewJpaRepository.findAllByName(reviews.get(0));
        User newUser=new User(id,name,address,noPhone,email,reviews);
        return userJpaRepository.save(newUser);
    }

    @Override
    public User editUser(long id, String name, String address, String noPhone, String email, List<Review> reviews) {

        User existingUser=userJpaRepository.findByName(id);
        existingUser.setAddress(address);
        existingUser.setEmail(email);
        existingUser.setNoPhone(noPhone);
        List<Review> userReviews=existingUser.getReviews();
        List<Review> addReviews= userJpaRepository.getReviews(name);
        existingUser.setReviews(addReviews);
        return userJpaRepository.save(existingUser);



    }

    @Override
    public void deleteUser(long id) {
        User oldUser=userJpaRepository.findByName(id);
        userJpaRepository.delete(oldUser);

    }

    @Override
    public User getById(long id) {
        return userJpaRepository.findByName(id);
    }

    @Override
    public List<Review> listUsersWithNumReviews(String name) {
        return userJpaRepository.getReviews(name);
    }
}
