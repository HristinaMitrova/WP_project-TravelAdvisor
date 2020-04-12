package mk.finki.ukim.wpproekt.repository;



import mk.finki.ukim.wpproekt.model.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    List<User> getAllUsers();
    User save(User user);
    Optional<User> findById(Long userId);
}
