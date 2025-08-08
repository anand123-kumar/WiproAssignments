package com.springbootbeanfiles;

public class Account {
    private String accountId;
    private String type;
    private String status;

    public Account(String accountId, String type, String status) {
        this.accountId = accountId;
        this.type = type;
        this.status = status;
    }

    public String getAccountId() {
        return accountId;
    }

    public String getType() {
        return type;
    }

    public String getStatus() {
        return status;
    }
}
