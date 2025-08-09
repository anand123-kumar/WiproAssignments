package mainfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import beanfiles.MyBean;

public class AppMain {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("WiproIOCContainer.xml");

        MyBean myBean = context.getBean(MyBean.class);
        myBean.displayDetails();
    }
}
