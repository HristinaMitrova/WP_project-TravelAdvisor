package mk.finki.ukim.wpproekt.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Data
@Entity
@Table(name="agencies")
@NoArgsConstructor
public class Agency {
    @Id
    private String agencyName;
    private String location;
    private String contactNo;
    private String contactMail;


    @ManyToMany
    @JoinTable(name="agency_review",
            joinColumns = @JoinColumn(name="agencyName"),
            inverseJoinColumns = @JoinColumn(name="reviews"))
    private List<Review> reviewList;

    @ManyToMany
    @JoinTable(name="agency_users",
               joinColumns = @JoinColumn(name="agencyName"),
            inverseJoinColumns = @JoinColumn(name="users"))
    private List<User> userList;

    @ManyToMany
    @JoinTable(name="agency_offers",
              joinColumns = @JoinColumn(name="agencyName"),
              inverseJoinColumns = @JoinColumn(name = "offers"))
    private List<Arrangement> offers;

public Agency(String agencyName,String location,String contactNo,String contactMail,List<Review> reviewList,List<User> userList,List<Arrangement> offers){
    this.agencyName=agencyName;
    this.location=location;
    this.contactNo=contactNo;
    this.contactMail=contactMail;
    this.reviewList=reviewList;
    this.userList=userList;
    this.offers=offers;
}
public String getAgencyName(){return agencyName;}
public void setAgencyName(String agencyName1){this.agencyName=agencyName1;}

    public String getLocation(){return location;}
    public void setLocation(String location1){this.location=location1;}

    public String getContactNo(){return contactNo;}
    public void setContactNo(String contactNo1){this.contactNo=contactNo1;}

    public String getContactMail(){return contactMail;}
    public void setContactMail(String contactMail1){this.contactMail=contactMail1;}

    public List<Review> getReviewList(){return reviewList;}
    public void setReviewList(List<Review> reviewList1){this.reviewList=reviewList1;}

    public List<User> getUserList(){return userList;}
    public void setuserList(List<User> userList1){this.userList=userList1;}

    public List<Arrangement> getOffers(){return offers;}
    public void setOffers(List<Arrangement> offers1){this.offers=offers1;}

}
