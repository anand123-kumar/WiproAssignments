package com.springboottestfiles;

import com.springbootbeanfiles.GroceryItem;
import com.springbootdaofiles.GroceryItemRepository;
import com.springbootservicefiles.GroceryItemService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class GroceryItemServiceTest {

    @Mock
    private GroceryItemRepository repository;

    @InjectMocks
    private GroceryItemService service;

    public GroceryItemServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllItems() {
        when(repository.findAll()).thenReturn(List.of(new GroceryItem()));
        assertEquals(1, service.getAllItems().size());
    }

    @Test
    void testSaveItem() {
        GroceryItem item = new GroceryItem();
        when(repository.save(item)).thenReturn(item);
        assertEquals(item, service.saveItem(item));
    }
}
