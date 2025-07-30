package wiprojavaprograms;

import java.util.Scanner;


@FunctionalInterface
interface Min3 {
    float min(float a, float b, float c);
}

public class Q30 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float a = sc.nextFloat();
        float b = sc.nextFloat();
        float c = sc.nextFloat();

        Min3 m = (x, y, z) -> Math.min(Math.min(x, y), z);
        System.out.println("Minimum: " + m.min(a, b, c));
        sc.close();
    }
   
}
