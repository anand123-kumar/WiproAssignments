package com.springbootbeanfiles;

import org.springframework.stereotype.Component;

@Component("classXYZ") 
public class ClassXYZ implements InterfacePQR {

    @Override
    public void display() {
        System.out.println("Ham Class XYZ");
    }
}
