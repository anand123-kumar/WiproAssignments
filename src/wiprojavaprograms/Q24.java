package wiprojavaprograms;

import java.util.Scanner;

public class Q24 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] speeds = new int[5];
        int total = 0;

        for (int i = 0; i < 5; i++) {
            speeds[i] = sc.nextInt();
            total += speeds[i];
        }

        double average = total / 5.0;

        System.out.println("Qualifying racers (speed > average):");
        for (int speed : speeds) {
            if (speed > average) {
                System.out.println(speed);
            }
        }
        sc.close();
    }
}
