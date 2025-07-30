package com.junitprograms;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FactorialUtil {
    public static int factorial(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative number not allowed");
        int result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }
}

class FactorialUtilTest {
    @Test
    void testValidFactorials() {
        assertEquals(1, FactorialUtil.factorial(0));
        assertEquals(1, FactorialUtil.factorial(1));
        assertEquals(120, FactorialUtil.factorial(5));
    }

    @Test
    void testNegativeInput() {
        assertThrows(IllegalArgumentException.class, () -> FactorialUtil.factorial(-1));
    }
}