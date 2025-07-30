package wiprojavaprograms;

class Shape {
    void area(int side) {
        System.out.println("Area of square: " + (side * side));
    }

    void area(int length, int breadth) {
        System.out.println("Area of rectangle: " + (length * breadth));
    }

    void perimeter(int side) {
        System.out.println("Perimeter of square: " + (4 * side));
    }

    void perimeter(int length, int breadth) {
        System.out.println("Perimeter of rectangle: " + (2 * (length + breadth)));
    }
}

public class Q14 {
    public static void main(String[] args) {
        Shape s = new Shape();
        s.area(5); // square
        s.area(4, 6); // rectangle
        s.perimeter(5);
        s.perimeter(4, 6);
    }
}
