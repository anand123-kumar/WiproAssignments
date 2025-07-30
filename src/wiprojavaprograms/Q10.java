package wiprojavaprograms;

public class Q10 {
    public static void main(String[] args) {
        int eggs = Integer.parseInt(args[0]);

        int gross = eggs / 144;
        eggs %= 144;
        int dozen = eggs / 12;
        int leftover = eggs % 12;

        System.out.println("Your number of eggs is " + gross + " gross, " + dozen + " dozen, and " + leftover);
    }
}
