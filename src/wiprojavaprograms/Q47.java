// Q47.java
package wiprojavaprograms;

@SuppressWarnings("serial")
class InvalidSalaryException extends Exception {
    public InvalidSalaryException(String message) {
        super(message);
    }
}

class Professor {
    String name;
    double salary;

    public Professor(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

class SalaryService {
    public void validateSalary(double salary) throws InvalidSalaryException {
        if (salary < 0) {
            throw new InvalidSalaryException("Salary cannot be negative!");
        }
    }

    public void processSalary(Professor prof) throws InvalidSalaryException {
        validateSalary(prof.salary);
    }

    public void startProcess(Professor prof) throws InvalidSalaryException {
        processSalary(prof);
    }
}

public class Q47 {
    public static void main(String[] args) {
        Professor p = new Professor("Raj", -10000);
        SalaryService service = new SalaryService();

        try {
            service.startProcess(p);
        } catch (InvalidSalaryException ex) {
            System.out.println("Exception caught: " + ex.getMessage());
        }
    }
}
