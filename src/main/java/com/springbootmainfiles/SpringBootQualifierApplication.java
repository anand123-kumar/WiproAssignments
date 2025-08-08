package com.springbootmainfiles;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import com.springbootbeanfiles.ClassKLM;

@SpringBootApplication
@ComponentScan(basePackages = {"com.springbootbeanfiles", "com.springbootcontrollerfiles"})
public class SpringBootQualifierApplication implements CommandLineRunner {

    private final ClassKLM klm;

    public SpringBootQualifierApplication(ClassKLM klm) {
        this.klm = klm;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootQualifierApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        klm.show();
    }
}
