package com.springbootbeanfiles;

import org.springframework.stereotype.Component;

@Component("classABC")
public class ClassABC implements InterfacePQR {
    @Override
    public void display() {
        System.out.println("Hi... I am ClassABC");
    }
}
