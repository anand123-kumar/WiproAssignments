package wiprojavaprograms;

import java.util.*;

class Student {
    private static int rollCounter = 1;
    private int rollNo;
    private String studName;
    private int eng, maths, science;

    public Student(String name, int eng, int maths, int science) {
        this.rollNo = rollCounter++;
        this.studName = name;
        this.eng = eng;
        this.maths = maths;
        this.science = science;
    }

    public int getRollNo() { return rollNo; }
    public String getName() { return studName; }
    public int getMaths() { return maths; }
    public int getTotal() { return eng + maths + science; }
    public double getPercentage() { return getTotal() / 3.0; }

    @Override
    public String toString() {
        return "RollNo: " + rollNo + ", Name: " + studName;
    }
}

public class Q12 {
    public static void main(String[] args) {
        Student[] students = {
            new Student("Anand", 90, 85, 80),
            new Student("Rahul", 60, 75, 65),
            new Student("Neha", 95, 92, 88),
            new Student("Ravi", 55, 58, 60),
            new Student("Priya", 87, 91, 89),
            new Student("Amit", 77, 69, 85),
            new Student("Kiran", 83, 80, 78),
            new Student("Divya", 67, 90, 85)
        };
        Arrays.sort(students, Comparator.comparingInt(Student::getRollNo));
        System.out.println("Students in ascending order of roll number:");
        for (Student s : students) System.out.println(s);
        Student topStudent = Collections.max(Arrays.asList(students), Comparator.comparingDouble(Student::getPercentage));
        System.out.println("\nHighest Percentage: " + topStudent.getName() + ", Roll No: " + topStudent.getRollNo());
        Student topMath = Collections.max(Arrays.asList(students), Comparator.comparingInt(Student::getMaths));
        System.out.println("Highest in Maths: " + topMath.getName() + ", Roll No: " + topMath.getRollNo());
        Arrays.sort(students, Comparator.comparingInt(s -> s.getMaths() + s.getTotal() - s.getMaths()));
        System.out.println("\nSorted by Maths + Science total:");
        for (Student s : students) System.out.println(s);
        Arrays.sort(students, Comparator.comparingDouble(Student::getPercentage).reversed());
        System.out.println("\nRankings:");
        int rank = 1;
        for (Student s : students) {
            System.out.printf("Rank %d - RollNo: %d, Name: %s, Total: %d, Percentage: %.2f%%\n",
                    rank++, s.getRollNo(), s.getName(), s.getTotal(), s.getPercentage());
        }
    }
}
