package wiprojavaprograms;

interface Drawable {
    void drawingColor();
    void thickness();
}

interface Fillable {
    void fillingColor();
    void size();
}

class Line implements Drawable {
    public void drawingColor() {
        System.out.println("Line color: Black");
    }

    public void thickness() {
        System.out.println("Line thickness: 1px");
    }
}

class Circle implements Drawable, Fillable {
    public void drawingColor() {
        System.out.println("Circle outline color: Blue");
    }

    public void thickness() {
        System.out.println("Circle outline thickness: 2px");
    }

    public void fillingColor() {
        System.out.println("Circle fill color: Yellow");
    }

    public void size() {
        System.out.println("Circle size: Radius 5");
    }
}

class Square implements Drawable, Fillable {
    public void drawingColor() {
        System.out.println("Square outline color: Red");
    }

    public void thickness() {
        System.out.println("Square outline thickness: 3px");
    }

    public void fillingColor() {
        System.out.println("Square fill color: Green");
    }

    public void size() {
        System.out.println("Square size: Side 10");
    }
}

public class Q22 {
    public static void main(String[] args) {
        Line line = new Line();
        Circle circle = new Circle();
        Square square = new Square();

        line.drawingColor();
        line.thickness();

        circle.drawingColor();
        circle.thickness();
        circle.fillingColor();
        circle.size();

        square.drawingColor();
        square.thickness();
        square.fillingColor();
        square.size();
    }
}
