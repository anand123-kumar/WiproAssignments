package mainfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

public class MainApp1 {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("WiproIOCContainer.xml");
        PersonDAO personDAO = (PersonDAO) context.getBean("personDAO");
        System.out.println("List of person is:");
        printList(personDAO.getAllPersons());
        System.out.println("\nGet person with ID 2");
        System.out.println(personDAO.getPersonById(2));
        System.out.println("\nCreating person:");
        Person newPerson = new Person(4, 36, "Sergey", "Emets");
        personDAO.addPerson(newPerson);
        System.out.println(newPerson);
        System.out.println("\nList of person is:");
        printList(personDAO.getAllPersons());
        System.out.println("\nDeleting person with ID 2");
        personDAO.deletePerson(2);
        printList(personDAO.getAllPersons());
        System.out.println("\nUpdate person with ID 4");
        Person updatedPerson = new Person(4, 36, "Sergey", "CHANGED");
        personDAO.updatePerson(updatedPerson);
        printList(personDAO.getAllPersons());

        ((ClassPathXmlApplicationContext) context).close();
    }

    private static void printList(List<Person> persons) {
        for (Person p : persons) {
            System.out.println(p);
        }
    }
}
