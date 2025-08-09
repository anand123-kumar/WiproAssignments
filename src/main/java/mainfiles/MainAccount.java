package mainfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import beanfiles.Account;

public class MainAccount {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("WiproIOCContainer.xml");

        Account account = (Account) context.getBean("accountBean");
        account.printAccountDetails();
    }
}
