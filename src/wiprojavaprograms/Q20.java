package wiprojavaprograms;

abstract class VehicleBase {
    abstract void startEngine();
    abstract void stopEngine();
}

class MyCar extends VehicleBase {
    void startEngine() {
        System.out.println("Car engine started.");
    }

    void stopEngine() {
        System.out.println("Car engine stopped.");
    }
}

class Motorcycle extends VehicleBase {
    void startEngine() {
        System.out.println("Motorcycle engine started.");
    }

    void stopEngine() {
        System.out.println("Motorcycle engine stopped.");
    }
}

public class Q20 {
    public static void main(String[] args) {
        VehicleBase car = new MyCar();
        VehicleBase bike = new Motorcycle();

        car.startEngine();
        car.stopEngine();

        bike.startEngine();
        bike.stopEngine();
    }
}
