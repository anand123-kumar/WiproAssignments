package wiprojavaprograms;

import java.io.*;
import java.util.Scanner;

@SuppressWarnings("serial")
class EmployeeSerializable implements Serializable {
    int emp_id;
    String emp_name;
    transient double emp_sal;

    EmployeeSerializable(int id, String name, double sal) {
        emp_id = id;
        emp_name = name;
        emp_sal = sal;
    }

    void display() {
        System.out.println("ID: " + emp_id + ", Name: " + emp_name + ", Salary: " + emp_sal);
    }
}

public class Q38 {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int id = sc.nextInt();
        String name = sc.next();
        double sal = sc.nextDouble();

        EmployeeSerializable e = new EmployeeSerializable(id, name, sal);

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("employee.ser"));
        oos.writeObject(e);
        oos.close();

        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("employee.ser"));
        EmployeeSerializable emp = (EmployeeSerializable) ois.readObject();
        ois.close();

        emp.display();
        sc.close();
    }
}
