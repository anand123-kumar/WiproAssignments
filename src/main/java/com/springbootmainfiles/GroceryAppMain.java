package com.springbootmainfiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import com.springbootservicefiles.GroceryItemService;


@SpringBootApplication
@ComponentScan(basePackages = {
    "com.springbootcontrollerfiles",
    "com.springbootservicefiles","com.springbootdaofiles",
    "com.springbootbeanfiles"
})
public class GroceryAppMain {
    public static void main(String[] args) {
        SpringApplication.run(GroceryAppMain.class, args);
    }
}
