package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "com.springbootbeanfiles",
        "com.springbootcontrollerfiles"
})
public class RequestBodyMainApp {
    public static void main(String[] args) {
        SpringApplication.run(RequestBodyMainApp.class, args);
    }
}






//   http://localhost:8080/users