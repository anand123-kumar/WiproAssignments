package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "com.springbootcontrollerfiles",
        "com.springbootbeanfiles"
})
public class SpringBootResponseBodyApp {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootResponseBodyApp.class, args);
    }
}




//    http://localhost:8080/bookXYZ
