package wiprojavaprograms;

public class Q3 {
    public static void main(String[] args) {
        int total = 90;
        int	boys = 45;
        int gradeA = (50 * total) / 100;
        int gradeABoys = 20;
        int gradeAGirls = gradeA - gradeABoys;
        System.out.println("Number of girls who got Grade A: " + gradeAGirls);
    }
}

