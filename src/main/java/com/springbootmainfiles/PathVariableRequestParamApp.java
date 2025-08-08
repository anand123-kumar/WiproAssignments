package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.springbootcontrollerfiles",
        "com.springbootbeanfiles",})
public class PathVariableRequestParamApp {
    public static void main(String[] args) {
        SpringApplication.run(PathVariableRequestParamApp.class, args);
    }
}



//GET http://localhost:8080/users/101/accounts?type=current&status=active
