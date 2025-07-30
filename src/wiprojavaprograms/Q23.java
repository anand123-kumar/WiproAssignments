package wiprojavaprograms;

import static java.lang.System.out;

class Hall {
    void message() {
        out.println("This is the first room while entering the house");
    }
}

class Kitchen {
    void showAppliances() {
        String[] appliances = {"Fridge", "Microwave", "Oven", "Mixer"};
        String[] copy = new String[appliances.length];

        for (int i = 0; i < appliances.length; i++) {
            System.out.println("Appliance: " + appliances[i]);
            copy[i] = appliances[i];
        }

        System.out.println("Copied appliances:");
        for (String item : copy) {
            System.out.println(item);
        }
    }
}

public class Q23 {
    public static void main(String[] args) {
        Hall h = new Hall();
        Kitchen k = new Kitchen();

        h.message();
        k.showAppliances();
    }
}
