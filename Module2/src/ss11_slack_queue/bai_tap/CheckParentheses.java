package ss11_slack_queue.bai_tap;

import java.util.Scanner;
import java.util.Stack;


public class CheckParentheses {
    public static boolean isParenthesesIsCorrectType(String str) {
        Stack<Character> expressionLeft = new Stack<>();
        Stack<Character> expressionRight = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '(') {
                expressionLeft.push(str.charAt(i));
            } else if (str.charAt(i) == ')') {
                expressionRight.push(str.charAt(i));
            }
        }
        return expressionLeft.size() != 0 && expressionLeft.size() == expressionRight.size();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input expression: ");
        String expression = scanner.nextLine();
        if(isParenthesesIsCorrectType(expression)){
            System.out.println("Correct parentheses");
        } else {
            System.out.println("NOT Correct parentheses");
        }
    }
}
