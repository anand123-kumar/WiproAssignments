package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "com.springbootbeanfiles",
        "com.springbootdaofiles",
        "com.springbootcontrollerfiles"
})

public class RestJdbcPublicationMainApp {
    public static void main(String[] args) {
        SpringApplication.run(RestJdbcPublicationMainApp.class, args);
    }
}
