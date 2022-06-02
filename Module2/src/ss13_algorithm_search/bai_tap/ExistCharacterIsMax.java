package ss13_algorithm_search.bai_tap;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ExistCharacterIsMax {
    public static List<String> findMaxExistCharacter(String str) {
        List<String> result = new ArrayList<>();
        List<String> stringArrayList = new ArrayList<>(Arrays.asList(str.split("")));
        int MAX = Integer.MIN_VALUE;
        for (int i = 0; i < str.length(); i++) {
            int finalI = i;
            List<String> findCharacter = stringArrayList.stream().filter(x -> x.equalsIgnoreCase(stringArrayList.get(finalI))).collect(Collectors.toList());
            if (findCharacter.size() > MAX) {
                MAX = findCharacter.size();
                result = findCharacter;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("String your check: ");
        String str = scanner.nextLine();
        int lens = findMaxExistCharacter(str).size();
        System.out.printf("String %s have %d time character %s", str, lens, findMaxExistCharacter(str).get(0));
    }
}
