// Q49.java
package wiprojavaprograms;

import java.util.Optional;

class Technician {
    int id;
    String name;
    Optional<String> email;
    Optional<String> department;

    public Technician(int id, String name, Optional<String> email, Optional<String> department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
    }
}

public class Q49 {
    public static void main(String[] args) {
        Technician tech = new Technician(1, "Anand", Optional.empty(), Optional.of("IT"));

        System.out.println("Name: " + tech.name);
        System.out.println("Email: " + tech.email.orElse("Email not provided"));
        System.out.println("Department: " + tech.department.orElse("Department not provided"));

        // Throwing exception if department not present
        try {
            String dept = tech.department.orElseThrow(() -> new RuntimeException("Department is mandatory"));
            System.out.println("Validated Department: " + dept);
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
