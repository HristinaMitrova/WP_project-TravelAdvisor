package mk.finki.ukim.wpproekt.service.impl;

import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
import mk.finki.ukim.wpproekt.repository.UserRepository;
import mk.finki.ukim.wpproekt.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addnewUser(long id, String name, String address, String noPhone, String email, List<Review> reviews) {
        System.out.println("[WP-Log] adding new user from UserServiceImpl");
        User user= new User(id,name,address,noPhone,email,reviews);
        return this.userRepository.save(user);
    }

    @Override
    public User editUser(long id, String name, String address, String noPhone, String email, List<Review> reviews) {
        return null;
    }

    @Override
    public void deleteUser(long id) {

    }

    @Override
    public User getById(long id) {
        return null;
    }

    @Override
    public List<Review> listUsersWithNumReviews(String name) {
        return null;
    }
}
