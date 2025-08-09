package beanfiles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Freshman {

    private String name = "Anand Kumar";

    @Autowired
    private DormRoom dorm;

    public String getName() {
        return name;
    }

    public DormRoom getRoom() {
        return dorm;
    }
}
