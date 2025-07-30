package wiprojavaprograms;

import java.util.Scanner;

@SuppressWarnings("serial")
class InvalidEmployeeCode extends Exception {
    public InvalidEmployeeCode(String msg) {
        super(msg);
    }
}

class EmpDetails {
    String code, name;
    EmpDetails(String code, String name) {
        this.code = code;
        this.name = name;
    }

    void display() {
        System.out.println("Employee Code: " + code + ", Name: " + name);
    }
}

public class Q35 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
			String code = sc.next();
			String name = sc.next();

			try {
			    if (!code.matches("\\d{2}-[FS]-\\d{3}"))
			        throw new InvalidEmployeeCode("Invalid employee code format");
			    EmpDetails e = new EmpDetails(code, name);
			    e.display();
			} catch (InvalidEmployeeCode e) {
			    System.out.println(e.getMessage());
			}
		}
        
    }
}
