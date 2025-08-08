package com.springboottestfiles;

import com.springbootcontrollerfiles.GroceryItemController;
import com.springbootservicefiles.GroceryItemService;
import com.springbootbeanfiles.GroceryItem;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(GroceryItemController.class)
public class GroceryItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GroceryItemService service;

    @Test
    void testGetAll() throws Exception {
        GroceryItem item = new GroceryItem();
        item.setId(1L);
        item.setName("Milk");
        item.setQuantity(2);
        item.setPrice(45.5);

        when(service.getAllItems()).thenReturn(List.of(item));

        mockMvc.perform(get("/api/grocery")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Milk"))
                .andExpect(jsonPath("$[0].quantity").value(2))
                .andExpect(jsonPath("$[0].price").value(45.5));
    }
}
