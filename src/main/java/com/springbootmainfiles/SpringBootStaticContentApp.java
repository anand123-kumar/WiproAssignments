package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "com.springbootbeanfiles",
        "com.springbootcontrollerfiles"
})
public class SpringBootStaticContentApp {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootStaticContentApp.class, args);
    }
}




//http://localhost:8080/