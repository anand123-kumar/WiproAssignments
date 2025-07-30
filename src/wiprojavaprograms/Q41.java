package wiprojavaprograms;

import java.util.*;

class BookStore {
    int bookId;
    String bookName;

    BookStore(int id, String name) {
        this.bookId = id;
        this.bookName = name;
    }

    public String toString() {
        return bookId + " - " + bookName;
    }
}

public class Q41 {
    public static void main(String[] args) {
        List<BookStore> books = new ArrayList<>();
        books.add(new BookStore(102, "Java"));
        books.add(new BookStore(101, "Algorithms"));
        books.add(new BookStore(103, "Data Science"));

        books.sort(Comparator.comparing(b -> b.bookName));
        System.out.println("Sorted by Book Name:");
        books.forEach(System.out::println);

        books.sort(Comparator.comparingInt(b -> b.bookId));
        System.out.println("Sorted by Book ID:");
        books.forEach(System.out::println);
    }
}
