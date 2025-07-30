package wiprojavaprograms;

import java.util.HashMap;

public class Q15 {
    public static void main(String[] args) {
        int[] arr = {2, 3, 2, 5, 3, 6, 2, 5, 6, 3};
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        System.out.println("Occurrences of each element:");
        for (int key : map.keySet()) {
            System.out.println(key + ": " + map.get(key));
        }
    }
}
