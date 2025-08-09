package beanfiles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StoreItem {

    private int id = 501;
    private String name = "Bluetooth Speaker";
    private double price = 2999.99;

    @Autowired
    private ItemCategory category;

    public void displayItemDetails() {
        System.out.println("----- Store Item Details -----");
        System.out.println("Item ID   : " + id);
        System.out.println("Name      : " + name);
        System.out.println("Price     : " + price);
        System.out.println(category.getDetails());
    }
}
