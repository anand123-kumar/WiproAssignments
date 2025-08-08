package com.wipro.service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalService {

    @Autowired
    private RestTemplate restTemplate;

    private static final String DELIVERY_SERVICE = "delivery-service";
    private static final String EXTERNAL_API_URL = "http://localhost:8081/delivery/status";

    @CircuitBreaker(name = DELIVERY_SERVICE, fallbackMethod = "fallbackResponse")
    public String callExternalAPI() {
        try {
            return restTemplate.getForObject(EXTERNAL_API_URL, String.class);
        } catch (Exception e) {
            throw new RuntimeException("External API call failed", e);
        }
    }

    public String fallbackResponse(Exception ex) {
        return "Fallback response: Delivery service is currently unavailable. Please try again later.";
    }
}