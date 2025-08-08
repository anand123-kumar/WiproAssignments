package com.wipro.controller;

import com.wipro.service.ExternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @Autowired
    private ExternalService externalService;

    @GetMapping("/delivery/status")
    public String getDeliveryStatus() {
        return externalService.callExternalAPI();
    }
}