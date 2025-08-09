package beanfiles;

public class Person {
    private int id;
    private int age;
    private String firstName;
    private String lastName;

    public Person() {}

    public Person(int id, int age, String firstName, String lastName) {
        this.id = id;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

   

    public int getId() { return id; }
    public int getAge() { return age; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }

    public void setId(int id) { this.id = id; }
    public void setAge(int age) { this.age = age; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    @Override
    public String toString() {
        return "Person[id=" + id + ", age=" + age + ", firstName='" + firstName + "', lastName='" + lastName + "']";
    }
}
