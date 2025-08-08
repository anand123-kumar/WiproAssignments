package com.springbootservicefiles;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootbeanfiles.GroceryItem;
import com.springbootdaofiles.GroceryItemRepository;

@Service
public class GroceryItemServiceImpl implements GroceryItemService {

    @Autowired
    private GroceryItemRepository repository;

    @Override
    public GroceryItem saveItem(GroceryItem item) {
        return repository.save(item);
    }

    @Override
    public List<GroceryItem> getAllItems() {
        return repository.findAll();
    }

    @Override
    public GroceryItem getItemById(Long id) {
        Optional<GroceryItem> optionalItem = repository.findById(id);
        return optionalItem.orElse(null);
    }

    @Override
    public GroceryItem updateItem(Long id, GroceryItem item) {
        GroceryItem existingItem = repository.findById(id).orElse(null);
        if (existingItem != null) {
            existingItem.setName(item.getName());
            existingItem.setQuantity(item.getQuantity());
            existingItem.setPrice(item.getPrice());
            return repository.save(existingItem);
        }
        return null;
    }

    @Override
    public void deleteItem(Long id) {
        repository.deleteById(id);
    }
}
