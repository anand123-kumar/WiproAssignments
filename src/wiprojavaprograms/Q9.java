package wiprojavaprograms;

import java.util.Scanner;

public class Q9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double total = 0;
        char choice;

        do {
            System.out.print("Enter product number (1-3): ");
            int product = sc.nextInt();

            System.out.print("Enter quantity sold: ");
            int quantity = sc.nextInt();

            switch (product) {
                case 1:
                    total += 22.50 * quantity;
                    break;
                case 2:
                    total += 44.50 * quantity;
                    break;
                case 3:
                    total += 9.98 * quantity;
                    break;
                default:
                    System.out.println("Invalid product number!");
            }

            System.out.print("Do you want to enter more? (Y/N): ");
            choice = sc.next().charAt(0);
        } while (choice == 'Y' || choice == 'y');

        System.out.println("Total retail value: ₹" + total);
        sc.close();
    }
}
