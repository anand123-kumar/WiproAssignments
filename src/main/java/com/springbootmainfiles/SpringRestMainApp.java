package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "com.springbootbeanfiles",
        "com.springbootcontrollerfiles"
})
public class SpringRestMainApp {
    public static void main(String[] args) {
        SpringApplication.run(SpringRestMainApp.class, args);
    }
}


//  http://localhost:8080/springrest/clients