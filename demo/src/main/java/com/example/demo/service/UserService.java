package com.example.demo.service;

import com.example.demo.model.Review;
import com.example.demo.model.User;

import java.util.List;

public interface UserService {
    User addnewUser(long id, String name, String address, String noPhone, String email, List<Review> reviews);
    User editUser(long id,String name, String address,String noPhone,String email,List<Review> reviews);
    void deleteUser(long id);
    User getById(long id);
    User findByName(String name);
    List<Review> listUsersWithNumReviews(String name);
//Page<User> getAllUsers(int page,int size);
}