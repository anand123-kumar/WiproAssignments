package wiprojavaprograms;

abstract class Bank {
    String accNo;
    String custName;
    int custGender;
    String custJob;
    double curBal;

    Bank(String accNo, String custName, int custGender, String custJob, double curBal) {
        this.accNo = accNo;
        this.custName = custName;
        this.custGender = custGender;
        this.custJob = custJob;
        this.curBal = curBal;
    }

    public abstract double calcBalance();

    public String toString() {
        return "Account: " + accNo + ", Name: " + custName + ", Balance: ₹" + calcBalance();
    }
}

class Saving extends Bank {
    double savRate;

    Saving(String accNo, String name, int gender, String job, double bal, double savRate) {
        super(accNo, name, gender, job, bal);
        this.savRate = savRate;
    }

    public double calcBalance() {
        return curBal + (savRate * curBal);
    }
}

class Current extends Bank {
    boolean fixedDep;
    double curRate;

    Current(String accNo, String name, int gender, String job, double bal, double curRate, boolean fixedDep) {
        super(accNo, name, gender, job, bal);
        this.curRate = curRate;
        this.fixedDep = fixedDep;
    }

    public double calcBalance() {
        double balance = curBal + (curRate * curBal);
        if (fixedDep) balance -= 150;
        return balance;
    }
}

public class Q19 {
    public static void main(String[] args) {
        Bank[] customers = {
            new Saving("S101", "Anand", 1, "Engineer", 10000, 0.05),
            new Current("C202", "Neha", 2, "Doctor", 15000, 0.03, true),
            new Saving("S103", "Kiran", 1, "Teacher", 12000, 0.04),
            new Current("C204", "Rahul", 1, "Manager", 18000, 0.02, false)
        };

        int currentCount = 0;
        double totalBalance = 0;

        for (Bank b : customers) {
            System.out.println(b);
            if (b instanceof Current) {
                currentCount++;
                totalBalance += b.calcBalance();
            }
        }

        System.out.println("Total current account holders: " + currentCount);
        System.out.println("Total balance in current accounts: ₹" + totalBalance);
    }
}
