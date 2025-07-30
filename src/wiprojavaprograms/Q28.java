package wiprojavaprograms;

interface PerformOperation {
    boolean check(int num);
}

public class Q28 {
    public static PerformOperation isOdd() {
        return n -> n % 2 != 0;
    }

    public static PerformOperation isPrime() {
        return n -> {
            if (n <= 1) return false;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) return false;
            }
            return true;
        };
    }

    public static PerformOperation isPalindrome() {
        return n -> {
            int original = n, reversed = 0;
            while (n != 0) {
                int digit = n % 10;
                reversed = reversed * 10 + digit;
                n /= 10;
            }
            return original == reversed;
        };
    }

    public static void main(String[] args) {
        System.out.println("Is 7 Odd? " + isOdd().check(7));
        System.out.println("Is 13 Prime? " + isPrime().check(13));
        System.out.println("Is 121 Palindrome? " + isPalindrome().check(121));
    }
}
