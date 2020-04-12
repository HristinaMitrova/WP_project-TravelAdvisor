package mk.finki.ukim.wpproekt.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Data
@Entity
@Table(name="users")
@NoArgsConstructor
public class User {
    @Id
    private long id;
    @Column(name="user_name")
    private String name;
    private String address;
    private String noPhone;
    private String email;
    //Reviews
    @ManyToMany
    @JoinTable(name = "user_reviews",
            joinColumns = @JoinColumn(name = "user_name"),
            inverseJoinColumns = @JoinColumn(name = "review"))
    private List<Review> reviews;

    public User(long id,String name, String address,String noPhone,String email,List<Review> reviews){
        this.id=id;
        this.name=name;
        this.address=address;
        this.noPhone=noPhone;
        this.email=email;
        this.reviews=reviews;

    }
    public long getId(){return id;}
    public void setId(long id1){this.id=id1;}

    public String getName(){return name;}
    public void setName(String name1){this.name=name1;}

    public String getAddress(){return address;}
    public void setAddress(String address1){this.address=address1;}

    public String getNoPhone(){return noPhone;}
    public void setNoPhone(String noPhone1){this.noPhone=noPhone1;}

    public String getEmail(){return email;}
    public void setEmail(String email1){this.email=email1;}

    public List<Review> getReviews(){return reviews;}
    public void setReviews(List<Review> reviews1){this.reviews=reviews1;}


}
