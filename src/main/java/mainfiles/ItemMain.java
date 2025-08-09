package mainfiles;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import beanfiles.Item;

public class ItemMain {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Item item = context.getBean(Item.class);
        item.displayDetails();

        context.close();
    }
}
