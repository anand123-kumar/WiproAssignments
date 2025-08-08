package com.springbootbeanfiles;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotNull
    private Double price;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

	public void setRestaurant(Restaurant restaurant2) {
		// TODO Auto-generated method stub
		
	}

    
}