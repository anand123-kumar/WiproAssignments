package com.springbootcontrollerfiles;

import com.springbootbeanfiles.Account;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AccountController {

    @GetMapping("/users/{id}/accounts")
    public List<Account> getAccounts(
            @PathVariable String id,
            @RequestParam String type,
            @RequestParam String status) {

        System.out.println("User ID: " + id);
        System.out.println("Type: " + type);
        System.out.println("Status: " + status);

        List<Account> accounts = new ArrayList<>();
        accounts.add(new Account("ACC101", type, status));
        accounts.add(new Account("ACC102", type, status));
        return accounts;
    }
}
