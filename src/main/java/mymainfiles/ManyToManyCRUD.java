package mymainfiles;

import mypojos.Author;
import mypojos.Book;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;

import java.util.*;

public class ManyToManyCRUD {
    static SessionFactory factory = new Configuration()
            .configure("wiprohibernate.cfg.xml")
            .addAnnotatedClass(Book.class)
            .addAnnotatedClass(Author.class)
            .buildSessionFactory();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;
        do {
            System.out.println("\n=== Hibernate Many-to-Many CRUD ===");
            System.out.println("1. Add Book with Authors");
            System.out.println("2. View All Books");
            System.out.println("3. Delete Book by ID");
            System.out.println("0. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1: addBookWithAuthors(sc); break;
                case 2: viewAllBooks(); break;
                case 3: deleteBookById(sc); break;
                case 0: factory.close(); System.out.println("Exited."); break;
                default: System.out.println("Invalid!");
            }
        } while (choice != 0);
        sc.close();
    }

    static void addBookWithAuthors(Scanner sc) {
        sc.nextLine();
        System.out.print("Enter Book Title: ");
        String title = sc.nextLine();

        System.out.print("How many authors? ");
        int n = sc.nextInt();
        sc.nextLine();

        List<Author> authors = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            System.out.print("Enter author " + (i + 1) + " name: ");
            String name = sc.nextLine();
            Author a = new Author();
            a.setName(name);
            authors.add(a);
        }

        Book b = new Book();
        b.setTitle(title);
        b.setAuthors(authors);

        for (Author a : authors) {
            a.setBooks(Arrays.asList(b)); 
        }

        try (Session session = factory.openSession()) {
            Transaction tx = session.beginTransaction();
            session.save(b);
            tx.commit();
            System.out.println("Book and authors saved.");
        }
    }

    static void viewAllBooks() {
        try (Session session = factory.openSession()) {
            List<Book> books = session.createQuery("from Book", Book.class).list();
            for (Book b : books) {
                System.out.println("Book ID: " + b.getId() + ", Title: " + b.getTitle());
                for (Author a : b.getAuthors()) {
                    System.out.println("\tAuthor: " + a.getName());
                }
            }
        }
    }

    static void deleteBookById(Scanner sc) {
        System.out.print("Enter book ID to delete: ");
        int id = sc.nextInt();
        try (Session session = factory.openSession()) {
            Transaction tx = session.beginTransaction();
            Book b = session.get(Book.class, id);
            if (b != null) {
                session.delete(b);
                System.out.println("Book deleted.");
            } else {
                System.out.println("Book not found.");
            }
            tx.commit();
        }
    }
}
