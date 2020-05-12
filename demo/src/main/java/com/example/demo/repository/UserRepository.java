package com.example.demo.repository;
import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    List<User> getAllUsers();
    User save(User user);
    Optional<User> findById(Long userId);
}