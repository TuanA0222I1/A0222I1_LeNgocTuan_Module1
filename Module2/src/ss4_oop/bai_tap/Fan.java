package ss4_oop.bai_tap;

public class Fan {
    final int SLOW = 1;
    final int MEDIUM = 2;
    final int FAST = 3;
    private int speed = SLOW;
    private boolean status = false;
    private double radius = 5;
    private String color = "blue";

    public Fan() {
    }

    public void toStringFan() {
        if (status) {
            System.out.printf("Fan is On. Fan is speed %d, Color %s, Radius %.2f\n", getSpeed(), getColor(), getRadius());
        } else {
            System.out.printf("Fan is Off. Fan is Color %s, Radius %.2f\n", getColor(), getRadius());
        }
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeedFast() {
        this.speed = FAST;
    }

    public void setSpeedMedium() {
        this.speed = MEDIUM;
    }


    public void setStatus(boolean status) {
        this.status = status;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public static void main(String[] args) {
        Fan fan1 = new Fan();
        Fan fan2 = new Fan();
        Fan fan3 = new Fan();

        fan2.setStatus(false);
        fan2.setRadius(5.2);
        fan2.setSpeedFast();
        fan2.setColor("green");

        fan3.setStatus(true);
        fan3.setRadius(10.4);
        fan3.setSpeedMedium();
        fan3.setColor("yellow");

        fan1.toStringFan();
        fan2.toStringFan();
        fan3.toStringFan();
    }
}
