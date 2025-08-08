package com.springbootservicefiles;

import java.util.List;
import com.springbootbeanfiles.GroceryItem;

public interface GroceryItemService {

    GroceryItem saveItem(GroceryItem item);

    List<GroceryItem> getAllItems();

    GroceryItem getItemById(Long id);

    GroceryItem updateItem(Long id, GroceryItem item);

    void deleteItem(Long id);
}
