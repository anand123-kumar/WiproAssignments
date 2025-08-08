package com.mainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication(scanBasePackages = {
	    "com.controllers",
	    "com.clients",
	    "com.pojos"
	})

@EnableFeignClients(basePackages = "com.clients")
public class RestaurantConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(RestaurantConsumerApplication.class, args);
    }
}
