// Q50.java
package wiprojavaprograms;

import java.util.*;
import java.util.stream.*;

class Intern {
    int id;
    String name;
    String department;
    double salary;

    public Intern(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    public String toString() {
        return id + " - " + name + " - " + department + " - " + salary;
    }

    public String getName() {
        return name;
    }

    public String getDepartment() {
        return department;
    }

    public double getSalary() {
        return salary;
    }
}

public class Q50 {
    public static void main(String[] args) {
        List<Intern> interns = Arrays.asList(
                new Intern(101, "Ravi", "HR", 50000),
                new Intern(102, "Priya", "IT", 60000),
                new Intern(103, "Arun", "HR", 55000),
                new Intern(104, "Kavya", "IT", 70000),
                new Intern(105, "Divya", "Sales", 45000)
        );

        // Q1: All names
        List<String> names = interns.stream().map(Intern::getName).collect(Collectors.toList());
        System.out.println("All names: " + names);

        // Q2: Salary > 55000
        System.out.println("\nSalary > 55000:");
        interns.stream().filter(i -> i.getSalary() > 55000).forEach(System.out::println);

        // Q3: HR count
        long hrCount = interns.stream().filter(i -> i.getDepartment().equals("HR")).count();
        System.out.println("\nHR count: " + hrCount);

        // Q4: Sort by salary desc
        System.out.println("\nSorted by salary desc:");
        interns.stream().sorted(Comparator.comparing(Intern::getSalary).reversed()).forEach(System.out::println);

        // Q5: Highest salary
        Intern maxIntern = interns.stream().max(Comparator.comparing(Intern::getSalary)).orElse(null);
        System.out.println("\nHighest paid: " + maxIntern);
    }
}
