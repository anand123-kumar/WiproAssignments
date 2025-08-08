package com.springbootmainfiles;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.springbootbeanfiles.PropertyReader;

@SpringBootApplication
@ComponentScan(basePackages = {"com.springbootbeanfiles", "com.springbootcontrollerfiles"})
public class SpringBootPropertyApplication implements CommandLineRunner {

    private final PropertyReader reader;

    public SpringBootPropertyApplication(PropertyReader reader) {
        this.reader = reader;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootPropertyApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        reader.printValues();
    }
}
