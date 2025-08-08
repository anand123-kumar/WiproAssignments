package com.controller;

import com.wipsec.GroceryItem;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/grocery")
public class GroceryController {

    @GetMapping("/public")
    public String publicMessage() {
        return "Welcome to the Grocery Store (Public)";
    }

    @GetMapping("/items")
    public List<GroceryItem> getItems() {
        return Arrays.asList(
            new GroceryItem("Rice", 55.0),
            new GroceryItem("Wheat", 45.0),
            new GroceryItem("Sugar", 40.0)
        );
    }

    @GetMapping("/orders")
    public List<String> getOrders() {
        return Arrays.asList("Order#101", "Order#102", "Order#103");
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminMessage() {
        return "Only ADMIN can view this message!";
    }
}