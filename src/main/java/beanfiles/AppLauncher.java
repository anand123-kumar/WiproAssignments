package beanfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import java.util.*;

public class AppLauncher {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(SpringJdbcConfig.class);
        PersonDAO dao = context.getBean(PersonDAO.class);

        dao.save(new Person(1, 21, "Vlad", "Boyarskiy"));
        dao.save(new Person(2, 30, "Oksi", "Bahatskaya"));
        dao.save(new Person(3, 32, "Vadim", "Vadimich"));

        System.out.println("Get ID 2: " + dao.get(2));

        dao.save(new Person(4, 36, "Sergey", "Emets"));

        System.out.println("List of persons:");
        dao.getAll().forEach(System.out::println);

        dao.delete(2);

        Person updated = new Person(4, 36, "Sergey", "CHANGED");
        dao.update(updated);

        System.out.println("Final List:");
        dao.getAll().forEach(System.out::println);
    }
}
