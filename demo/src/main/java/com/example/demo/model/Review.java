package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="reviews")
@NoArgsConstructor
public class Review {
    @Id
    private long id;
    @Column(name="title")
    private String title;
    @Column(name="destination")
    private String destinationName;
    private String description;

    public Review(long id,String title,String destinationName,String description){
        this.id=id;
        this.title=title;
        this.destinationName=destinationName;
        this.description=description;
    }
public long getId(){
        return id;
}
public void setId(long id){
        this.id=id;
}

    public String getTitle(){return title;}
    public void setTitle(String title1){this.title=title1;}

    public String getDestinationName(){return destinationName;}
    public void setDestinationName(String destinationName1){this.destinationName=destinationName1;}

    public String getDescription(){return description;}
    public void setDescription(String description1){this.description=description1;}
}
