package com.springbootbeanfiles;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class GroceryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    @Min(value = 1, message = "Quantity must be at least 1")
    private int quantity;

    @DecimalMin(value = "0.1", message = "Price must be positive")
    private double price;

	public Object getName() {
		
		return null;
	}

	public void setName(Object name2) {
		
		
	}

	public Object getPrice() {
		return null;
	}

	public Object getQuantity() {
		return null;
	}

	public void setPrice(Object price2) {
		
	}

	public void setQuantity(Object quantity2) {
		
	}

	public Long getId() {
		return null;
	}

	public void setId(long l) {
		
		
	}

 
}
