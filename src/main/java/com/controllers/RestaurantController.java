package com.controllers;

import com.pojos.Restaurant;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return List.of(
            new Restaurant(1, "Paradise Biryani", "Hyderabad"),
            new Restaurant(2, "Barbeque Nation", "Bangalore")
        );
    }
}
