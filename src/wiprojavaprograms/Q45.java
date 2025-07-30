package wiprojavaprograms;

import java.util.*;
import java.util.stream.Collectors;

class StudentQ45 {
    int id;
    String name;
    String department;

    StudentQ45(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
}

public class Q45 {
    public static void main(String[] args) {
        List<StudentQ45> students = new ArrayList<>();
        students.add(new StudentQ45(1, "Anand", "CSE"));
        students.add(new StudentQ45(2, "Ravi", "ECE"));
        students.add(new StudentQ45(3, "Kiran", "CSE"));
        students.add(new StudentQ45(4, "Meena", "IT"));
        students.add(new StudentQ45(5, "Raju", "ECE"));

        Map<String, List<StudentQ45>> grouped = students.stream()
            .collect(Collectors.groupingBy(s -> s.department));

        for (Map.Entry<String, List<StudentQ45>> entry : grouped.entrySet()) {
            System.out.println("Department: " + entry.getKey());
            for (StudentQ45 s : entry.getValue()) {
                System.out.println("  " + s.name);
            }
        }
    }
}
