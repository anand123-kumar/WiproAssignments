package beanfiles;

import org.springframework.stereotype.Component;

@Component
public class DormRoom {
    private int number = 101;
    private String building = "Alpha Block";

    public String getLocation() {
        return "Dorm #" + number + ", Building: " + building;
    }
}
