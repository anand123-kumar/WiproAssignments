package com.controllers;

import com.clients.RestaurantClient;
import com.pojos.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consumer")
public class ConsumerController {

    @Autowired
    private RestaurantClient restaurantClient;

    @GetMapping("/restaurants")
    public List<Restaurant> fetchRestaurants() {
        return restaurantClient.getRestaurants();
    }
}
