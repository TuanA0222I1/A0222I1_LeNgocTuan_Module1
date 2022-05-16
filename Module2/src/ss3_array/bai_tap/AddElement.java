package ss3_array.bai_tap;

import java.util.Scanner;

public class AddElement {
    public static void main(String[] args) {
        int lens = 10;
        int[] numbs = new int[lens];
        int idx;
        numbs[0] = 1;
        numbs[1] = 2;
        numbs[2] = 3;
        numbs[3] = 8;
        numbs[4] = 9;
        System.out.print("List numbers: ");
        for (int i = 0; i < lens; i++) {
            System.out.printf("%d ", numbs[i]);
        }

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("\nInput index you want to add: ");
            idx = scanner.nextInt();
            if (idx >= lens) {
                System.out.println("index MUST smaller length numbs");
                continue;
            }else if (idx < 0) {
                System.out.println("index MUST bigger 0");
                continue;
            } else {
                System.out.print("Input value you want to add: ");
                break;
            }
        }

        int value = scanner.nextInt();
        for (int i = 0; i < lens; i++) {
            if (i == idx) {
                numbs[i] = value;
            }
        }
        System.out.print("List Number: ");
        for (int i : numbs) {
            System.out.printf("%d ", i);
        }
    }
}
