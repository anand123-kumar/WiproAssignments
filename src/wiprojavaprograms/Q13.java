package wiprojavaprograms;

class Worker {
    String name;
    double salaryRate;

    Worker(String name, double salaryRate) {
        this.name = name;
        this.salaryRate = salaryRate;
    }

    double pay(int hours) {
        return 0; // Placeholder
    }
}

class DailyWorker extends Worker {
    DailyWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    double pay(int days) {
        return days * salaryRate;
    }
}

class SalariedWorker extends Worker {
    SalariedWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    double pay(int hours) {
        return 40 * salaryRate;
    }
}

public class Q13 {
    public static void main(String[] args) {
        DailyWorker dw = new DailyWorker("Anand", 500);
        SalariedWorker sw = new SalariedWorker("Rahul", 600);

        System.out.println("DailyWorker Weekly Pay: ₹" + dw.pay(6));
        System.out.println("SalariedWorker Weekly Pay: ₹" + sw.pay(0));
    }
}
