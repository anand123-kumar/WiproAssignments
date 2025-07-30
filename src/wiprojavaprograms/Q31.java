package wiprojavaprograms;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Q31 {
    @SuppressWarnings("unused")
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter an integer: ");
            int num = sc.nextInt(); 

            String str = "abc";
            System.out.println("Character at index 5: " + str.charAt(5)); 
        } catch (InputMismatchException e) {
            System.out.println("InputMismatchException occurred: " + e);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("StringIndexOutOfBoundsException occurred: " + e);
        }
        sc.close();
    }
}
