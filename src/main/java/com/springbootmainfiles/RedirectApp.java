package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.springbootcontrollerfiles",
        "com.springbootbeanfiles"
})
public class RedirectApp {
    public static void main(String[] args) {
        SpringApplication.run(RedirectApp.class, args);
    }
}



//http://localhost:8080/example/test
