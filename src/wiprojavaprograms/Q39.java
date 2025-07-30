package wiprojavaprograms;

import java.util.*;

class MediaLibrary<T> {
    private List<T> items = new ArrayList<>();
    void add(T item) {
        items.add(item);
    }
    T get(int index) {
        return items.get(index);
    }
}

class NonGenericLibrary {
    private List<Object> items = new ArrayList<Object>();
    void add(Object item) {
        items.add(item);
    }
    Object get(int index) {
        return items.get(index);
    }
}

public class Q39 {
    public static void main(String[] args) {
        MediaLibrary<String> genericLibrary = new MediaLibrary<>();
        genericLibrary.add("Book: Java Basics");
        genericLibrary.add("Video: Learning Streams");
        genericLibrary.add("Newspaper: The Times");

        NonGenericLibrary rawLibrary = new NonGenericLibrary();
        rawLibrary.add("Book: Python");
        rawLibrary.add("Video: Spring Boot");

        System.out.println(genericLibrary.get(0));
        System.out.println(rawLibrary.get(1));
    }
}
