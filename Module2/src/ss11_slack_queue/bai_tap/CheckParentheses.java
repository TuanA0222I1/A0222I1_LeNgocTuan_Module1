package ss11_slack_queue.bai_tap;

import java.util.Scanner;
import java.util.Stack;


public class CheckParentheses {
    public static boolean isParenthesesIsCorrectType(String str) { // only ()
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

    public static boolean isAllParentheses(String str) { // {[()]}
        Stack<Character> stack = new Stack<>();
        for (Character character : str.toCharArray()) {
            if (character == '(' || character == '{' || character == '[') {
                stack.push(character);
                continue;
            }
            if (character == ')' && (stack.pop() != '(' || stack.empty())) return false;
            if (character == '}' && (stack.pop() != '{' || stack.empty())) return false;
            if (character == ']' && (stack.pop() != '[' || stack.empty())) return false;
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input expression: ");
        String expression = scanner.nextLine();
        if (isParenthesesIsCorrectType(expression)) {
            System.out.println(expression + " Correct parentheses");
        } else {
            System.out.println(expression + " NOT Correct parentheses");
        }
        if (isAllParentheses(expression)) {
            System.out.println(expression + " Correct parentheses");
        } else {
            System.out.println(expression + " NOT Correct parentheses");
        }
    }
}
