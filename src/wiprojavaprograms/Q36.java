package wiprojavaprograms;

class Tank {
    boolean releaseTank = false;

    void fill() {
        System.out.println("Tank is being filled.");
    }

    void empty() {
        System.out.println("Tank is being emptied.");
        releaseTank = true;
    }

    protected void finalize() {
        if (!releaseTank) {
            System.out.println("Error: Tank was not released properly!");
        } else {
            System.out.println("Tank cleanup successful.");
        }
    }
}

public class Q36 {
    public static void main(String[] args) {
        Tank t1 = new Tank();
        t1.fill();
        t1.empty();
        t1 = null;
        System.gc();

        Tank t2 = new Tank();
        t2.fill();
        t2 = null;
        System.gc();
    }
}
