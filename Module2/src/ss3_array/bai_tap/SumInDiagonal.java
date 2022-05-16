package ss3_array.bai_tap;

import java.util.Scanner;

public class SumInDiagonal {
    public static String displayNumbs(int[][] nums) {
        String ans = "";
        for (int j = 0; j < nums.length; j++) {
            for (int i : nums[j]) {
                ans += i + " ";
            }
            ans += "\n";
        }
        return ans;
    }

    public static int calculatorDiagonal(int[][] nums) {
        int diagonal = 0;
        for (byte i = 0; i < nums.length; i++) {
            for (byte j = 0; j < nums[i].length; j++) {
                if (i == j) {
                    diagonal += nums[i][j];
                }
            }
        }
        return diagonal;
    }

    public static void main(String[] args) {
        int lens;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input length: ");
        lens = scanner.nextInt();
        int[][] numbers = new int[lens][lens];
        for (byte i = 0; i < lens; i++) {
            for (byte j = 0; j < lens; j++) {
                numbers[i][j] = (int) (Math.random() * 100);
            }
        }
        System.out.printf("List Numbers:\n%s", displayNumbs(numbers));
        System.out.printf("With diagonal %d",calculatorDiagonal(numbers));
    }
}
