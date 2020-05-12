package com.example.demo.service.implpersistent;

import com.example.demo.model.Review;
import com.example.demo.model.User;
import com.example.demo.repository.jpa.ReviewJpaRepository;
import com.example.demo.repository.jpa.UserJpaRepository;
import com.example.demo.service.UserService;
import org.springframework.stereotype.Service;

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

        User existingUser=userJpaRepository.findByName(name);
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
        User oldUser=userJpaRepository.findById(id);
        userJpaRepository.delete(oldUser);
    }



    @Override
    public User findByName(String name) {
        return userJpaRepository.findByName(name);
    }



    /*@Override
    public void deleteUser(String name) {
        User oldUser=userJpaRepository.findByName(name);
        userJpaRepository.delete(oldUser);

    }*/

    @Override
    public User getById(long id) {
        return userJpaRepository.findById(id);
    }

    @Override
    public List<Review> listUsersWithNumReviews(String name) {
        return userJpaRepository.getReviews(name);
    }
}
