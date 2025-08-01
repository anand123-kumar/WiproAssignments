package com.mockitoprograms;

public class ProductService123 {
	private ProductRepository123 repository;

	 public ProductService123(ProductRepository123 repository)
	 {
	        this.repository = repository;
	    }
	 
	 public String getProductName(int id) 
	 {
	        Product123 product = repository.findProductById(id);
	        return product != null ? product.getName() : "Product Not Found";
	    }

}
