package mk.finki.ukim.wpproekt.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="arrangements")
@NoArgsConstructor
public class Arrangement {
    @Id
    long arrId;
    private String description;
    private String destination;
    private float price;

    public Arrangement(long arrId,String description,String destination,float price){
        this.description=description;
        this.destination=destination;
        this.price=price;
        this. arrId=arrId;
    }

    public String getDescription(){return description;}
    public void setDescription(String description1){this.description=description1;}

    public String getDestination(){return destination;}
    public void setDestination(String destination1){this.destination=destination1;}

    public float getPrice(){return price;}
    public void setPrice(float price1){this.price=price1;}

    public long getArrId(){return arrId;}
    public void setArrId(long arrId1){this.arrId=arrId1;}

}
