package ss11_slack_queue.bai_tap.reverse_stack;

import java.util.ArrayList;
import java.util.Stack;

public class ReverseStack {
    public static void main(String[] args) {
        Stack<Integer> numbers = new Stack<>();
        numbers.push(7);
        numbers.push(9);
        numbers.push(4);
        numbers.push(1);
        numbers.push(2);
        int lens = numbers.size();
        System.out.println(new ArrayList<>(numbers));
        Stack<Integer> result = new Stack<>();
        for (int i = 0; i < lens; i++) {
            result.push(numbers.pop());
        }
        numbers = result;
        System.out.println(new ArrayList<>(numbers));
        Stack<String> str = new Stack<>();
        str.push("gau ");
        str.push("gau ");
        str.push("noise ");
        str.push("make ");
        str.push("dog ");
        System.out.println(new ArrayList<>(str));
        int lenStr = str.size();
        String ans = "";
        for (int i = 0; i < lenStr; i++) {
            ans += str.pop();
        }
        System.out.println(ans);
    }
}
