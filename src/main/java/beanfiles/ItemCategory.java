package beanfiles;

import org.springframework.stereotype.Component;

@Component
public class ItemCategory {
    private int categoryId = 3001;
    private String categoryName = "Electronics";

    public String getDetails() {
        return "Category ID: " + categoryId + ", Name: " + categoryName;
    }
}
