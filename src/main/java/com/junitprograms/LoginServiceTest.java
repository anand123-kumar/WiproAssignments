package com.junitprograms;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

@SuppressWarnings("unused")
class LoginService {
    public static boolean validate(String username, String password) {
        if (username == null || password == null || username.isEmpty() || password.isEmpty()) return false;
        return username.equals("admin") && password.equals("1234");
    }
}

class LoginServiceTest {
    @Test
    void testValidCredentials() {
        assertTrue(LoginService.validate("admin", "1234"));
    }

    @Test
    void testEmptyOrNullInputs() {
        assertFalse(LoginService.validate(null, "1234"));
        assertFalse(LoginService.validate("admin", null));
        assertFalse(LoginService.validate("", "1234"));
        assertFalse(LoginService.validate("admin", ""));
    }

    @Test
    void testInvalidCredentials() {
        assertFalse(LoginService.validate("user", "pass"));
    }
}
