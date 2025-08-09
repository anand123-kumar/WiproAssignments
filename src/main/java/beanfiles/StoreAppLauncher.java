package beanfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class StoreAppLauncher {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfiguration.class);

        StoreItem item = context.getBean(StoreItem.class);
        item.displayItemDetails();
    }
}
