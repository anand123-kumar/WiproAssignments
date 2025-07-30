package wiprojavaprograms;

class Vehicle {
    String color;
    int wheels;
    String model;

    Vehicle(String color, int wheels, String model) {
        this.color = color;
        this.wheels = wheels;
        this.model = model;
    }

    void showDetails() {
        System.out.println("Model: " + model + ", Color: " + color + ", Wheels: " + wheels);
    }
}

class Truck extends Vehicle {
    Truck(String color, int wheels, String model) {
        super(color, wheels, model);
    }

    void loadCapacity() {
        System.out.println("Truck can carry heavy loads.");
    }
}

class Bus extends Vehicle {
    Bus(String color, int wheels, String model) {
        super(color, wheels, model);
    }

    void passengerCapacity() {
        System.out.println("Bus can carry many passengers.");
    }
}

class Car extends Vehicle {
    Car(String color, int wheels, String model) {
        super(color, wheels, model);
    }

    void driveComfort() {
        System.out.println("Car is comfortable for family trips.");
    }
}

public class Q17 {
    public static void main(String[] args) {
        Truck t = new Truck("Red", 6, "Tata");
        Bus b = new Bus("Blue", 4, "Volvo");
        Car c = new Car("Black", 4, "Honda");

        t.showDetails();
        t.loadCapacity();

        b.showDetails();
        b.passengerCapacity();

        c.showDetails();
        c.driveComfort();
    }
}
