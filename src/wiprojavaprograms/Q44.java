package wiprojavaprograms;

import java.util.*;

class EmpQ44 {
    int id;
    String name;
    double salary;

    EmpQ44(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public String toString() {
        return id + " " + name + " " + salary;
    }
}

public class Q44 {
    public static void main(String[] args) {
        List<EmpQ44> list = new ArrayList<>();
        list.add(new EmpQ44(101, "Zara", 75000));
        list.add(new EmpQ44(103, "Amit", 85000));
        list.add(new EmpQ44(102, "Kiran", 65000));

        list.sort(Comparator.comparingDouble((EmpQ44 e) -> e.salary).reversed());
        System.out.println("Sorted by salary (descending):");
        list.forEach(System.out::println);

        list.sort(Comparator.comparing(e -> e.name));
        System.out.println("Sorted by name:");
        list.forEach(System.out::println);
    }
}
