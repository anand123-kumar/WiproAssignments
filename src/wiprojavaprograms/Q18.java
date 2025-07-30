package wiprojavaprograms;

class Animal {
    String color;
    int age;
    double weight;

    Animal(String color, int age, double weight) {
        this.color = color;
        this.age = age;
        this.weight = weight;
    }

    boolean isVegetarian() { return false; }
    boolean canClimb() { return false; }
    String sound() { return ""; }
}

class Lion extends Animal {
    Lion() { super("Golden", 5, 190); }
    boolean isVegetarian() { return false; }
    String sound() { return "Roar"; }
}

class Tiger extends Animal {
    Tiger() { super("Orange", 4, 180); }
    boolean isVegetarian() { return false; }
    String sound() { return "Growl"; }
}

class Deer extends Animal {
    Deer() { super("Brown", 2, 90); }
    boolean isVegetarian() { return true; }
    String sound() { return "Bleat"; }
}

class Monkey extends Animal {
    Monkey() { super("Grey", 3, 40); }
    boolean isVegetarian() { return true; }
    boolean canClimb() { return true; }
    String sound() { return "Chatter"; }
}

class Elephant extends Animal {
    Elephant() { super("Grey", 10, 500); }
    boolean isVegetarian() { return true; }
    String sound() { return "Trumpet"; }
}

class Giraffe extends Animal {
    Giraffe() { super("Yellow", 6, 350); }
    boolean isVegetarian() { return true; }
    String sound() { return "Hum"; }
}

public class Q18 {
    public static void main(String[] args) {
        Animal[] zoo = { new Lion(), new Tiger(), new Deer(), new Monkey(), new Elephant(), new Giraffe() };
        for (Animal a : zoo) {
            System.out.println("Animal: " + a.getClass().getSimpleName() + ", Vegetarian: " + a.isVegetarian() + ", Can Climb: " + a.canClimb() + ", Sound: " + a.sound());
        }
    }
}
