package ss6_abstract_class_interface.bai_tap.color;

public class Solution {
    public static void main(String[] args) {
       Square square = new Square();
       Square square1 = new Square(1.3,"yellow");
       square.howToColor();
       square1.howToColor();
    }
}
