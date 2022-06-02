package ss11_slack_queue.bai_tap.queueInfoPerson;

import java.util.Collections;
import java.util.LinkedList;

public class Solution {
    public static void main(String[] args) {
        LinkedList<Person> managerPerson = new LinkedList<>();
        managerPerson.add(new Person("Oriana", false, 14, 4, 1990));
        managerPerson.add(new Person("Jhin", true, 16, 5, 1990));
        managerPerson.add(new Person("Teemo", false, 14, 5, 1990));
        managerPerson.add(new Person("Darius", true, 12, 4, 1992));
        managerPerson.add(new Person("Azir", true, 14, 4, 1990));
        managerPerson.add(new Person("Jinx", false,14, 5, 1991));
        managerPerson.add(new Person("LeeSin", true, 14, 2, 1992));
        System.out.println("Before sort: ");
        managerPerson.forEach(x-> System.out.println((x.toString())));
        Collections.sort(managerPerson);
        System.out.println("After sort: ");
        managerPerson.forEach(x-> System.out.println((x.toString())));
    }
}
