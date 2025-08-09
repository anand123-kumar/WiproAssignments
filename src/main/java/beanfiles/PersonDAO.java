package beanfiles;

import java.util.List;

public interface PersonDAO {
    void save(Person person);
    void update(Person person);
    void delete(int id);
    Person get(int id);
    List<Person> getAll();
}
