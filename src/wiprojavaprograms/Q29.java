package wiprojavaprograms;

import java.util.NoSuchElementException;
import java.util.Scanner;

public class Q29 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String regNo = sc.next();
        String mobile = sc.next();

        try {
            if (regNo.length() != 9)
                throw new IllegalArgumentException();
            if (!regNo.matches("[a-zA-Z0-9]+"))
                throw new NoSuchElementException();
            if (mobile.length() != 10)
                throw new IllegalArgumentException();
            if (!mobile.matches("\\d+"))
                throw new NumberFormatException();
            System.out.println("valid");
        } catch (Exception e) {
            System.out.println("invalid");
        }
       
    }
    
}
