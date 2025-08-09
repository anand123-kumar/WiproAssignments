package mainfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import beanfiles.ShoppingService;

public class MainShopping {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("wiproIOCContainer/AopConfig.xml");

        ShoppingService service = context.getBean("shoppingService", ShoppingService.class);

        System.out.println("\n--- Add to Cart ---");
        service.addToCart("Mouse");

        System.out.println("\n--- Make Payment ---");
        try {
            service.makePayment(1500);
        } catch (Exception e) {
        }

        System.out.println("\n--- Place Order ---");
        service.placeOrder();
    }
}
