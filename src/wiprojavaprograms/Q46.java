// Q46.java
package wiprojavaprograms;

import java.util.*;

class Staff {
    int id;
    String name;
    double salary;

    public Staff(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public String toString() {
        return "Staff{" + "id=" + id + ", name='" + name + '\'' + ", salary=" + salary + '}';
    }
}

class Repository<T, ID> {
    private Map<ID, T> data = new HashMap<>();

    public void save(ID id, T entity) {
        data.put(id, entity);
    }

    public T findById(ID id) {
        return data.get(id);
    }

    public List<T> findAll() {
        return new ArrayList<>(data.values());
    }

    public void deleteById(ID id) {
        data.remove(id);
    }
}

public class Q46 {
    public static void main(String[] args) {
        Repository<Staff, Integer> repo = new Repository<>();
        repo.save(1, new Staff(1, "Ravi", 50000));
        repo.save(2, new Staff(2, "Priya", 60000));
        repo.save(3, new Staff(3, "Arjun", 55000));

        System.out.println("All Staff:");
        for (Staff s : repo.findAll()) {
            System.out.println(s);
        }

        System.out.println("\nFind by ID 2:");
        System.out.println(repo.findById(2));

        System.out.println("\nDelete ID 1");
        repo.deleteById(1);

        System.out.println("\nRemaining Staff:");
        for (Staff s : repo.findAll()) {
            System.out.println(s);
        }
    }
}
