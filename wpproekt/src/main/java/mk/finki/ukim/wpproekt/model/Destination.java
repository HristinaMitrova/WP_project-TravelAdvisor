package mk.finki.ukim.wpproekt.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Data
@Entity
@Table(name="destinations")
@NoArgsConstructor
public class Destination {
    @Id
    @Column(name="dest_id")
    private long destId;
    private String country;
    private String cityPlace;
    @ManyToMany
    @JoinTable(name = "destination_reviews",
            joinColumns = @JoinColumn(name = "dest_id"),
            inverseJoinColumns = @JoinColumn(name = "review"))
    private List<Review> reviewList;
   /* @OneToMany(mappedBy = "destination")
    private Accommodation accommodation;*/
    public Destination(long destId,String country,String cityPlace,List<Review> reviewList){
        this.country=country;
        this.cityPlace=cityPlace;
        this.reviewList=reviewList;
        this.destId=destId;
    }

    public String getCountry(){return country;}
    public void setCountry(String country1){this.country=country1;}

    public String getCityPlace(){return cityPlace;}
    public void setcityPlace(String cityPlace1){this.cityPlace=cityPlace1;}

    public List<Review> getReviewList(){return reviewList;}
    public void setReviewList(List<Review> reviewList1){this.reviewList=reviewList1;}

    public long getDestId(){return destId;}
    public void setDestId(long destId1){this.destId=destId1;}



}
