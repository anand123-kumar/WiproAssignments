package com.springbootcontrollerfiles;

import com.springbootbeanfiles.Book;
import jakarta.xml.bind.annotation.XmlRootElement;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {

    @GetMapping(value = "/bookXYZ", produces = "application/xml")
    public BookList getBooks() {
        List<Book> list = new ArrayList<>();
        list.add(new Book(101, "Java Tutorials", "Krishna", 0));
        list.add(new Book(102, "Spring Tutorials", "Mahesh", 0));
        list.add(new Book(103, "Angular Tutorials", "Shiva", 0));

        return new BookList(list);
    }
}

@XmlRootElement(name = "List")
class BookList {
    private List<Book> item;

    public BookList() {}

    public BookList(List<Book> item) {
        this.item = item;
    }

    @jakarta.xml.bind.annotation.XmlElement(name = "item")
    public List<Book> getItem() {
        return item;
    }

    public void setItem(List<Book> item) {
        this.item = item;
    }
}
