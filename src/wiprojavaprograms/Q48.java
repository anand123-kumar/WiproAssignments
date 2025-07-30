// Q48.java
package wiprojavaprograms;

@FunctionalInterface
interface TrainerProcessor {
    void process(Trainer t);
}

class Trainer {
    int id;
    String name;
    double salary;

    public Trainer(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

public class Q48 {
    public static void main(String[] args) {
        Trainer t1 = new Trainer(101, "Ravi", 50000);
        Trainer t2 = new Trainer(102, "Priya", 60000);

        TrainerProcessor nameSalaryPrinter = trainer ->
                System.out.println("Name: " + trainer.name + ", Salary: " + trainer.salary);

        TrainerProcessor bonusCalculator = trainer ->
                System.out.println("Bonus for " + trainer.name + ": " + (trainer.salary * 0.10));

        nameSalaryPrinter.process(t1);
        nameSalaryPrinter.process(t2);

        bonusCalculator.process(t1);
        bonusCalculator.process(t2);
    }
}
