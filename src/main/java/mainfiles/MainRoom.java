package mainfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import beanfiles.Freshman;

public class MainRoom {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("WiproIOCContainer.xml");

        Freshman freshman = context.getBean(Freshman.class);
        System.out.println("Name: " + freshman.getName());
        System.out.println("Dorm Room: " + freshman.getRoom().getLocation());
    }
}
