package wiprojavaprograms;

import java.util.*;

public class Q26 {
    public static void main(String[] args) {
        int[] input = {2, 3, 54, 1, 6, 7, 7};
        Set<Integer> set = new HashSet<>();
        int sum = 0;

        for (int num : input) {
            if (set.add(num) && num % 2 == 0) {
                sum += num;
            }
        }

        System.out.println("Sum of even numbers after removing duplicates: " + sum);
    }
}
