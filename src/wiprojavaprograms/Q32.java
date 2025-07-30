package wiprojavaprograms;

public class Q32 {
    @SuppressWarnings({ "unused", "null" })
	public static void main(String[] args) {
        try {
            int[] arr = new int[-5];
        } catch (NegativeArraySizeException e) {
            e.printStackTrace();
        }

        try {
            int[] arr = new int[5];
            int a = arr[10];
        } catch (ArrayIndexOutOfBoundsException e) {
            e.printStackTrace();
        }

        try {
            String s = "test";
            char c = s.charAt(10);
        } catch (StringIndexOutOfBoundsException e) {
            e.printStackTrace();
        }

        try {
            String[] s = new String[2];
            String a = s[5];
        } catch (IndexOutOfBoundsException e) {
            e.printStackTrace();
        }

        try {
            String str = null;
            str.length();
        } catch (NullPointerException e) {
            e.printStackTrace();
        }

        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
    }
}
