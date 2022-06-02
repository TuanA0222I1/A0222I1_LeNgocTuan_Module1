package ss11_slack_queue.bai_tap.queueInfoPerson;

public class Person implements Comparable<Person>{
    private String fullName;
    private boolean gender;
    private int dayOfBirth;
    private int monOfBirth;
    private int yearOfBirth;

    public Person() {
    }

    public Person(String fullName, boolean gender, int dayOfBirth, int monOfBirth, int yearOfBirth) {
        this.fullName = fullName;
        this.gender = gender;
        this.dayOfBirth = dayOfBirth;
        this.monOfBirth = monOfBirth;
        this.yearOfBirth = yearOfBirth;
    }

    public String getGender() {
        return this.gender ? "Male" : "Female";
    }

    public String getFullName() {
        return fullName;
    }


    public int getDayOfBirth() {
        return dayOfBirth;
    }

    public int getMonOfBirth() {
        return monOfBirth;
    }

    public int getYearOfBirth() {
        return yearOfBirth;
    }

    public String toString() {
        return String.format("Name: %s, gender: %s, birthday %d/%d/%d", getFullName(), getGender(), getDayOfBirth(), getMonOfBirth(), getYearOfBirth());
    }

    @Override
    public int compareTo(Person o) {
        if (this.getYearOfBirth() > o.getYearOfBirth()) {
            return 1;
        } else if (this.getYearOfBirth() < o.getYearOfBirth()) {
            return -1;
        } else {
            if (this.getMonOfBirth() > o.getMonOfBirth()) {
                return 1;
            } else if (this.getMonOfBirth() < o.getMonOfBirth()) {
                return -1;
            } else {
                if (this.getDayOfBirth() > o.getDayOfBirth()) {
                    return 1;
                } else if (this.getDayOfBirth() < o.getDayOfBirth()) {
                    return -1;
                } else {
                    if (this.getGender().equals("Female")) {
                        return 1;
                    } else return 0;
                }
            }
        }
    }
}
