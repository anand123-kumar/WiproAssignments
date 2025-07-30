package wiprojavaprograms;

enum Currency {
    ONE, TWO, FIVE, TEN, TWENTY, FIFTY
}

public class Q27 {
    public static void main(String[] args) {
        for (Currency c : Currency.values()) {
            System.out.print(c + ": ");
            switch (c) {
                case ONE:
                    System.out.println("One rupee coin");
                    break;
                case TWO:
                    System.out.println("Two rupee coin");
                    break;
                case FIVE:
                    System.out.println("Five rupee coin");
                    break;
                case TEN:
                    System.out.println("Ten rupee note");
                    break;
                case TWENTY:
                    System.out.println("Twenty rupee note");
                    break;
                case FIFTY:
                    System.out.println("Fifty rupee note");
                    break;
            }
        }
    }
}
