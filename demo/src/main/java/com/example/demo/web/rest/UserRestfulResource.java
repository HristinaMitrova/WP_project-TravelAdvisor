package com.example.demo.web.rest;

import com.example.demo.model.Review;
import com.example.demo.model.User;
import com.example.demo.service.implpersistent.PersistentUserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/rest/users")
public class UserRestfulResource {
    private PersistentUserServiceImpl persistentUserService;

    public UserRestfulResource(PersistentUserServiceImpl persistentUserService){
        this.persistentUserService=persistentUserService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestParam("id") long id,
                           @RequestParam("name") String name,
                           @RequestParam("address") String address,
                           @RequestParam("noPhone") String noPhone,
                           @RequestParam("email") String email,
                           @RequestParam("reviews") List<Review> reviews,
                           HttpServletResponse response,
                           UriComponentsBuilder builder){
        User newUser=persistentUserService.addnewUser(id, name, address, noPhone, email, reviews);

        response.setHeader("Location", builder.path("/rest/users/{id}").buildAndExpand(newUser.getId()).toUriString());
        return newUser;
    }
    @PutMapping("/{id}")
    public User updateUser(@PathVariable long id,
                           @RequestParam("name") String name,
                           @RequestParam("address") String address,
                           @RequestParam("noPhone") String noPhone,
                           @RequestParam("email")String email,
                           @RequestParam("reviews")List<Review>reviews){

        return persistentUserService.editUser(id, name,address,noPhone,email,reviews);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable long id) {
        persistentUserService.deleteUser(id);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable long id){
        return persistentUserService.getById(id);
    }


    @GetMapping
    public List<Review> getReviewsFromUsers(@RequestParam(value = "name", required = true) String name){
       /* if(name!=null)
            return persistentUserService.listUsersWithNumReviews(name);

        return null;*/
        return persistentUserService.listUsersWithNumReviews(name);
    }

}
