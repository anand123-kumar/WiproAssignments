package com.mockitoprograms;

public class ProductService123 {
	private ProductRepository123 repository;//interface reference variable

	 public ProductService123(ProductRepository123 repository) //Constructor taking interface as a parameter
	 {
	        this.repository = repository;
	    }
	 
	 public String getProductName(int id) 
	 {
	        Product123 product = repository.findProductById(id);
	        return product != null ? product.getName() : "Product Not Found";
	    }

}
