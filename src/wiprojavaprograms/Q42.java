package wiprojavaprograms;

public class Q42 {
    public static void someMethod2() throws Exception {
        throw new Exception("Exception thrown from someMethod2");
    }

    public static void someMethod() throws Exception {
        try {
            someMethod2();
        } catch (Exception e) {
            System.out.println("Caught in someMethod(), rethrowing...");
            throw e; // Rethrow to main
        }
    }

    public static void main(String[] args) {
        try {
            someMethod();
        } catch (Exception e) {
            System.out.println("Caught in main()");
            e.printStackTrace(); // This shows full error trace
        }
    }
}
