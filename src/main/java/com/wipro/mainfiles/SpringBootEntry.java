package com.wipro.mainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@ComponentScan(basePackages = "com.wipro")
public class SpringBootEntry {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootEntry.class, args);
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

  //   GET  http://localhost:8082/delivery/status