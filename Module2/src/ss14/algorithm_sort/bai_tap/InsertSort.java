package ss14.algorithm_sort.bai_tap;

import java.util.Arrays;

public class InsertSort {
    public static int[] insertionSort(int[] numbers) {
        Arrays.sort(numbers);
        int position = 0;
        int value = 0;

        for (int i = 0; i < numbers.length; i++) {
            position = i;
            value = numbers[i];
            while (position > 0 && value < numbers[i - 1]) {
                numbers[i] = numbers[i - 1];
                position--;
            }
            numbers[position] = value;
        }
        return numbers;
    }

    public static void main(String[] args) {
        int[] numbers = {42, 51, 11, 25, 64, 25, 32, 15, 93, 85, 77, 21, 60};
        System.out.println(Arrays.toString(numbers));
        System.out.println(Arrays.toString(insertionSort(numbers)));
    }
}
