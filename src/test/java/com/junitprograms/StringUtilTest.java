package com.junitprograms;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class StringUtil {
    public static String reverse(String input) {
        if (input == null) return null;
        return new StringBuilder(input).reverse().toString();
    }
}

class StringUtilTest {
    @Test
    void testNullInput() {
        assertNull(StringUtil.reverse(null));
    }

    @Test
    void testEmptyString() {
        assertEquals("", StringUtil.reverse(""));
    }

    @Test
    void testRegularString() {
        assertEquals("cba", StringUtil.reverse("abc"));
    }
}
