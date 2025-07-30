package wiprojavaprograms;

class LowSalException extends Exception {
    public LowSalException(String msg) {
        super(msg);
    }
}

class Emp {
    int empId;
    String empName;
    String designation;
    double basic;
    private double hra;

    Emp(int empId, String empName, String designation, double basic) throws LowSalException {
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        if (basic < 50000)
            throw new LowSalException("Basic salary must be at least 50000");
        this.basic = basic;
        calculateHRA();
    }

    private void calculateHRA() {
        switch (designation) {
            case "Manager": hra = 0.10 * basic; break;
            case "TeamLeader": hra = 0.12 * basic; break;
            case "HR": hra = 0.05 * basic; break;
            default: hra = 0;
        }
    }

    void printDET() {
        System.out.println("EmpId: " + empId + ", Name: " + empName + ", Designation: " + designation + ", Basic: " + basic + ", HRA: " + hra);
    }
}

public class Q33 {
    public static void main(String[] args) {
        try {
            Emp e = new Emp(101, "Anand", "Manager", 60000);
            e.printDET();
        } catch (LowSalException e) {
            System.out.println(e.getMessage());
        }
    }
}
