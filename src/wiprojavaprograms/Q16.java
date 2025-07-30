package wiprojavaprograms;

import java.util.Scanner;

public class Q16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] marks = new int[3];
        int i = 0;

        while (i < 3) {
            System.out.print("Enter the mark (0-100) for student " + (i + 1) + ": ");
            int input = sc.nextInt();
            if (input >= 0 && input <= 100) {
                marks[i++] = input;
            } else {
                System.out.println("Invalid input, try again...");
            }
        }

        double avg = (marks[0] + marks[1] + marks[2]) / 3.0;
        System.out.printf("The average is: %.2f\n", avg);
        sc.close();
    }
}
