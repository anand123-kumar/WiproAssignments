package com.springboottestfiles;

import com.springbootbeanfiles.GroceryItem;
import com.springbootdaofiles.GroceryItemRepository;
import com.springbootmainfiles.GroceryAppMain; // ✅ Change this to your actual main class
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
    classes = GroceryAppMain.class // ✅ IMPORTANT: set your @SpringBootApplication class here
)
public class GroceryItemIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private GroceryItemRepository repository;

    @Test
    public void testCreateAndGet() {
        // Arrange
        GroceryItem item = new GroceryItem();
        item.setName("Bread");
        item.setQuantity(3);
        item.setPrice(30.0);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<GroceryItem> request = new HttpEntity<>(item, headers);

        // Act: POST /api/grocery
        ResponseEntity<GroceryItem> response = restTemplate.postForEntity("/api/grocery", request, GroceryItem.class);

        // Assert: Response validation
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertNotNull(response.getBody().getId());

        // Act: Verify in DB
        Long id = response.getBody().getId();
        GroceryItem savedItem = repository.findById(id).orElse(null);

        assertNotNull(savedItem);
        assertEquals("Bread", savedItem.getName());
        assertEquals(3, savedItem.getQuantity());
        assertEquals(30.0, savedItem.getPrice());
    }
}
