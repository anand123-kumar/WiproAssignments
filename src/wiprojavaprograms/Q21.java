package wiprojavaprograms;

abstract class Person {
    abstract void eat();
    abstract void exercise();
}

class Athlete extends Person {
    void eat() {
        System.out.println("Athlete eats a high-protein diet.");
    }

    void exercise() {
        System.out.println("Athlete exercises daily with intense workouts.");
    }
}

class LazyPerson extends Person {
    void eat() {
        System.out.println("Lazy person eats junk food.");
    }

    void exercise() {
        System.out.println("Lazy person rarely exercises.");
    }
}

public class Q21 {
    public static void main(String[] args) {
        Person p1 = new Athlete();
        Person p2 = new LazyPerson();

        p1.eat();
        p1.exercise();

        p2.eat();
        p2.exercise();
    }
}
