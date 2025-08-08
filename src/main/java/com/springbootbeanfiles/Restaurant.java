package com.springbootbeanfiles;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Restaurant name is required")
    private String name;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "Cuisine type is required")
    private String cuisine;

    @Min(value = 1, message = "Rating should be at least 1")
    @Max(value = 5, message = "Rating should not exceed 5")
    private int rating;

    @DecimalMin(value = "0.0", inclusive = false, message = "Average cost must be greater than 0")
    private double averageCost;

    public Restaurant() {
    }

    public Restaurant(String name, String address, String cuisine, int rating, double averageCost) {
        this.name = name;
        this.address = address;
        this.cuisine = cuisine;
        this.rating = rating;
        this.averageCost = averageCost;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public double getAverageCost() {
        return averageCost;
    }

    public void setAverageCost(double averageCost) {
        this.averageCost = averageCost;
    }

    @Override
    public String toString() {
        return "Restaurant [id=" + id +
               ", name=" + name +
               ", address=" + address +
               ", cuisine=" + cuisine +
               ", rating=" + rating +
               ", averageCost=" + averageCost + "]";
    }
}
