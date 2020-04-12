package mk.finki.ukim.wpproekt.repository.InMemoryImpl;

import mk.finki.ukim.wpproekt.bootstrap.DataHolder;
import mk.finki.ukim.wpproekt.model.User;
import mk.finki.ukim.wpproekt.repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class InMemoryUserRepositoryImpl implements UserRepository {

    @Override
    public List<User> getAllUsers() {
        return new ArrayList<>(DataHolder.users);
    }

    @Override
    public User save(User user) {
        System.out.println("[WP-Log] {save from InMemoryUserRepositoryImpl}");
        DataHolder.users.add(user);
        return user;
    }

    @Override
    public Optional<User> findById(Long userId) {
        return Optional.empty();
    }
}
