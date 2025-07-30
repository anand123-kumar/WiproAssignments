package wiprojavaprograms;

import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedReader;
import java.util.Scanner;

public class Q37 {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        FileWriter fw = new FileWriter("batchmates.txt");
        System.out.println("Enter 5 batchmate names:");
        for (int i = 0; i < 5; i++) {
            String name = sc.nextLine();
            fw.write(name + "\n");
        }
        fw.close();

        BufferedReader br = new BufferedReader(new FileReader("batchmates.txt"));
        String line;
        System.out.println("Batchmate Names:");
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
        sc.close();
    }
}
