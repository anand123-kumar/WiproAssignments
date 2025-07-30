package wiprojavaprograms;

import java.util.Scanner;

public class Q8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of classes held: ");
        int held = sc.nextInt();

        System.out.print("Enter number of classes attended: ");
        int attended = sc.nextInt();

        System.out.print("Do you have medical cause? (Y/N): ");
        char medical = sc.next().charAt(0);

        double percent = (attended * 100.0) / held;
        System.out.println("Attendance: " + percent + "%");

        if (percent >= 70 || medical == 'Y' || medical == 'y') {
            System.out.println("Allowed to sit in exam");
        } else {
            System.out.println("Not allowed to sit in exam");
            sc.close();
        }
    }
}
