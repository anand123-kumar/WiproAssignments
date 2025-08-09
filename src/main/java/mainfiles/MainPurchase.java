package mainfiles;

import beanfiles.Purchase;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainPurchase {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("WiproIOCContainer.xml");
        Purchase purchase = (Purchase) context.getBean("purchase");
        purchase.displayPurchase();
    }
}
