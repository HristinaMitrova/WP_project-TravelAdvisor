package mk.finki.ukim.wpproekt.service;

import mk.finki.ukim.wpproekt.model.Review;
import mk.finki.ukim.wpproekt.model.User;
//import org.springframework.data.domain.Page;

import java.util.List;

public interface UserService {
User addnewUser(long id, String name, String address, String noPhone, String email, List<Review> reviews);
User editUser(long id,String name, String address,String noPhone,String email,List<Review> reviews);
void deleteUser(long id);
User getById(long id);
List<Review> listUsersWithNumReviews(String name);
//Page<User> getAllUsers(int page,int size);
}
