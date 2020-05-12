package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Data
@Entity
@Table(name="accommodations")
@NoArgsConstructor
public class Accommodation {
    @Id
    @Column(name="accId")
    private long accId;
    private String owner;
    private int noRooms;
    private float price;
    private String description;

    @ManyToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "accId",referencedColumnName = "accId")
    private Destination destination;

    @ManyToMany
    @JoinTable(name="acc_reviews",
            joinColumns = @JoinColumn(name="accId"),
            inverseJoinColumns = @JoinColumn(name = "title"))
    private List<Review> reviews;

    public Accommodation(long accId,String owner,int noRooms,float price,String description,Destination destination,List<Review> reviews){
        this.accId=accId;
        this.owner=owner;
        this.noRooms=noRooms;
        this.price=price;
        this.description=description;
        this.destination=destination;
        this.reviews=reviews;

    }
    public long getAccId(){return accId;}
    public void setAccId(long accId1){this.accId=accId1;}

    public String getOwner(){return owner;}
    public void setOwner(String owner1){ this.owner=owner1; }

    public int getNoRooms(){return noRooms;}
    public void setNoRooms(int noRooms1){ this.noRooms=noRooms1; }

    public float getPrice(){return price;}
    public void setPrice(float price1){ this.price=price1; }

    public String getDescription(){return description;}
    public void setDescription(String description1){ this.description=description1; }

    public Destination getDestination(){return destination;}
    public void setDestination(Destination destination1){ this.destination=destination1; }

    public List<Review> getReviews(){return reviews;}
    public void setReviews(List<Review> reviews1){ this.reviews=reviews1; }
}

