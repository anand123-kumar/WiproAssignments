package wiprojavaprograms;

class Employee {
    String empId;
    String name;
    int yearOfBirth;

    Employee(String empId, String name, int yearOfBirth) {
        this.empId = empId;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    void display() {
        System.out.println("ID: " + empId + ", Name: " + name + ", Year of Birth: " + yearOfBirth);
    }
}

public class Q34 {
    public static void main(String[] args) {
        Employee emp = new Employee("81-F-112", "Rahul", 1981);
        emp.display();
    }
}
