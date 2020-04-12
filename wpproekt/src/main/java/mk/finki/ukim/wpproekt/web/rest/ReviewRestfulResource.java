package mk.finki.ukim.wpproekt.web.rest;

import mk.finki.ukim.wpproekt.model.Review;

import mk.finki.ukim.wpproekt.service.impl.PersistentReviewServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/rest/reviews")
public class ReviewRestfulResource {
    private PersistentReviewServiceImpl persistentReviewService;

    public ReviewRestfulResource(PersistentReviewServiceImpl persistentReviewService){
        this.persistentReviewService=persistentReviewService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Review createReview(@RequestParam("title") String title,
                           @RequestParam("destinationName") String destinatonName,
                           @RequestParam("description") String description,
                           HttpServletResponse response,
                           UriComponentsBuilder builder){
        Review newReview=persistentReviewService.addNewReview(title,destinatonName,description);


        response.setHeader("Location", builder.path("/rest/reviews/{title}").buildAndExpand(newReview.getTitle()).toUriString());
        return newReview;
    }
    @PutMapping("/{title}")
    public Review updateReview(@PathVariable  String title,
                           @RequestParam("destinationName") String destinatonName,
                           @RequestParam("description") String description){

        return persistentReviewService.editReview(title,destinatonName,description);
    }
    @DeleteMapping("/{title}")
    public void deleteReview(@PathVariable String title) {
        persistentReviewService.deleteReview(title);

    }

    @GetMapping("/{title}")
    public Review getReview(@PathVariable String title){
        return persistentReviewService.getByTitle(title);

    }


    @GetMapping("/{destination}")
    public List<Review> listReviews(@PathVariable("destination") String destination){
       return persistentReviewService.listReviews(destination);
    }

}
