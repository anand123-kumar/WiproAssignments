package mydaofiles;

import mypojos.Item;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import java.util.List;

public class ItemDAO {
    private static SessionFactory factory = new Configuration()
            .configure("wiprohibernate.cfg.xml")
            .addAnnotatedClass(Item.class)
            .buildSessionFactory();

    public void addItem(Item item) {
        try (Session session = factory.openSession()) {
            Transaction tx = session.beginTransaction();
            session.save(item);
            tx.commit();
        }
    }

    public List<Item> getAllItems() {
        try (Session session = factory.openSession()) {
            return session.createQuery("from Item", Item.class).list();
        }
    }

    public void updateItem(int id, String name, double price) {
        try (Session session = factory.openSession()) {
            Transaction tx = session.beginTransaction();
            Item item = session.get(Item.class, id);
            if (item != null) {
                item.setName(name);
                item.setPrice(price);
                session.update(item);
            }
            tx.commit();
        }
    }

    public void deleteItem(int id) {
        try (Session session = factory.openSession()) {
            Transaction tx = session.beginTransaction();
            Item item = session.get(Item.class, id);
            if (item != null) session.delete(item);
            tx.commit();
        }
    }

    public Item getItemById(int id) {
        try (Session session = factory.openSession()) {
            return session.get(Item.class, id);
        }
    }

    public void close() {
        factory.close();
    }
}
