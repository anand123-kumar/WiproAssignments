package mymainfiles;

import mypojos.Account;
import mypojos.Transaction;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;

import java.util.*;

public class OnetoManyBidirectionalCRUD {
    private static SessionFactory factory;

    static {
        factory = new Configuration()
                .configure("wiprohibernate.cfg.xml")
                .addAnnotatedClass(Account.class)
                .addAnnotatedClass(Transaction.class)
                .buildSessionFactory();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\n=== Hibernate One-to-Many Bidirectional CRUD ===");
            System.out.println("1. Add Account with Transactions");
            System.out.println("2. View All Accounts");
            System.out.println("0. Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    addAccountWithTransactions(sc);
                    break;
                case 2:
                    viewAllAccounts();
                    break;
                case 0:
                    factory.close();
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 0);
    }

    private static void addAccountWithTransactions(Scanner sc) {
        sc.nextLine();
        System.out.print("Enter Account Holder Name: ");
        String name = sc.nextLine();

        Account account = new Account();
        account.setHolderName(name);

        List<Transaction> txList = new ArrayList<>();

        System.out.print("Enter number of transactions: ");
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            System.out.print("Enter amount for transaction " + (i + 1) + ": ");
            double amt = sc.nextDouble();

            Transaction tx = new Transaction();
            tx.setAmount(amt);
            tx.setAccount(account);
            txList.add(tx);
        }

        account.setTransactions(txList);

        try (Session session = factory.openSession()) {
            org.hibernate.Transaction tx = session.beginTransaction();
            session.save(account);  
            tx.commit();
            System.out.println("Account and Transactions saved.");
        }
    }

    private static void viewAllAccounts() {
        try (Session session = factory.openSession()) {
            List<Account> accounts = session.createQuery("from Account", Account.class).list();
            for (Account acc : accounts) {
                System.out.println("Account ID: " + acc.getId() + ", Holder: " + acc.getHolderName());
                for (Transaction t : acc.getTransactions()) {
                    System.out.println("\tTransaction ID: " + t.getId() + ", Amount: ₹" + t.getAmount());
                }
            }
        }
    }
}
