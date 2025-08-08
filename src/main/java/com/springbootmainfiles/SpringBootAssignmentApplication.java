package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"com.springbootbeanfiles", "com.springbootcontrollerfiles"})
public class SpringBootAssignmentApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootAssignmentApplication.class, args);
    }
}