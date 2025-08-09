package mainfiles;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import beanfiles.Account;

public class MainAccount1 {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("WiproIOCContainer.xml");
        Account account = context.getBean("accountBean", Account.class);
        account.displayDetails();
    }
}
