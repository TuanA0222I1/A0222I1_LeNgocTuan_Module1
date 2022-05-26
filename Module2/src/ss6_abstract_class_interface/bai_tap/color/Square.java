package ss6_abstract_class_interface.bai_tap.color;

public class Square implements Colorable {
    private double width = 1;
    private String color = "red";

    public Square() {
    }

    public Square(double width, String color) {
        this.width = width;
        this.color = color;
    }

    @Override
    public void howToColor() {
        System.out.printf("Square width %.2f color %s\n", width, color);
    }
}
