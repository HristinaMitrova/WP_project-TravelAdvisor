package com.example.demo.bootstrap;

import com.example.demo.model.*;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
@Getter
public class DataHolder {
    public static final List<User> users = new ArrayList<>();
    public static final List<Review> reviews=new ArrayList<>();
    public static final List<Review> ppetkovskiReviews=new ArrayList<>();
    public static final List<Destination> destinations=new ArrayList<>();
    public static final List<Arrangement> arrangements=new ArrayList<>();
    public static final List<Agency> agencies=new ArrayList<>();
    public static final List<Accommodation> accommodations=new ArrayList<>();
    Destination destinationSpain;

    @PostConstruct
    public void init(){

        ppetkovskiReviews.add(new Review(1111,"Ubavo iskustvo!","Spanija","Posetete ja Barcelona."));
        destinationSpain=new Destination(1111,"Spain","Barcelona",ppetkovskiReviews);
        users.add(new User(1111,"Petko Petkovski","PartizanskiOdredi br.4","000-999-888","ppetkovski@mail.com",ppetkovskiReviews));
        destinations.add(new Destination(1111, "Spain", "Barcelona", ppetkovskiReviews));
        arrangements.add(new Arrangement(1111,"South Europe","Spain",500));
        accommodations.add(new Accommodation(1111,"Owner1",5,300,"The vacation you deserve.",destinations.get(0),ppetkovskiReviews));
        agencies.add(new Agency(1111,"RapsodyTravel","Skopje,Macedonia","02 444 666","rapsody@mail.com",ppetkovskiReviews,users,arrangements));

        destinations.add(destinationSpain);

        reviews.add(new Review(1112,"The best place on Earth!","Spain","Ibiza is the best Spanish island in Mediteranian See."));
        destinationSpain=new Destination(1112,"Spain","Ibiza",reviews);
        users.add(new User(1112,"Ana Anevska","Aminta Treti br.3","000-992-288","anaanevska@mail.com",reviews));
        destinations.add(new Destination(1112, "Spain", "Ibiza", reviews));
        arrangements.add(new Arrangement(1112,"South Europe","Spain",700));
        accommodations.add(new Accommodation(1112,"Owner55",4,400,"Ibiza island.",destinations.get(2),reviews));
        agencies.add(new Agency(1112,"Balkan Fun","Skopje,Macedonia","02 727 272","rapsody@mail.com",reviews,users,arrangements));

        reviews.add(new Review(1113,"Cultural shock.","Turkey","Istanbul offers a very unique cultural experience."));
        destinationSpain=new Destination(1113,"Turkey","Istanbul",reviews);
        users.add(new User(1113,"Marko Markovski","Ilindenska br.6","040-392-218","mmarko@mail.com",reviews));
        destinations.add(new Destination(1113, "Turkey", "Istanbul", reviews));
        arrangements.add(new Arrangement(1113,"East Europe","Istanbul,Turkey",700));
        accommodations.add(new Accommodation(1113,"Owner3",6,300,"Istanbul.",destinations.get(3),reviews));
        agencies.add(new Agency(1113,"Savana Tours","Skopje,Macedonia","02 246 286","rapsody@mail.com",reviews,users,arrangements));

        reviews.add(new Review(1114,"Urban city.","Portugal","Lisbon is a European MUST SEE."));
        destinationSpain=new Destination(1114,"Portugal","Lisbon",reviews);
        users.add(new User(1114,"Jana Janevska","bulevar AVNOJ br.7","040-795-918","jjanevska@mail.com",reviews));
        destinations.add(new Destination(1114, "Portugal", "Lisbon", reviews));
        arrangements.add(new Arrangement(1114,"South-West Europe","Lisbon,Europe",600));
        accommodations.add(new Accommodation(1114,"Owner7",5,400,"Mediteranean part of Europe, capital and largest city of Portugal.",destinations.get(4),reviews));
        agencies.add(new Agency(1114,"Iguana Travel","Skopje,Macedonia","02 259 378","iguanatravel@mail.com",reviews,users,arrangements));
    }
}
