package com.codegym.models;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.*;

public class User {
    @NotBlank
    @Length(min = 2, max = 45)
    String firstName;

    @NotBlank
    @Length(min = 2, max = 45)
    String lastName;

    @NotBlank
    @Pattern(regexp = "^0\\d{9}$")
    String phoneNumber;

    @Min(18)
    @Max(140)
    int age;

    @NotBlank
    @Email
    String email;

    public User() {
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
