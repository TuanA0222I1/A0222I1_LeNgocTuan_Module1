package com.codegym.models;

import javax.validation.constraints.*;


public class Person {
    @NotEmpty(message = "name should be not null")
    String fullName;

    @Min(1936)
    int yearBorn;

    @NotEmpty(message = "passportNumber should be not null")
    String passportNumber;

    @NotEmpty(message = "vehicle should be not null")
    String vehicle;

    @Email(message = "email not correct form")
    @NotEmpty(message = "email should be not null")
    String email;

    public Person() {
    }

    public Person(String fullName, int yearBorn, String passportNumber, String vehicle, String email) {
        this.fullName = fullName;
        this.yearBorn = yearBorn;
        this.passportNumber = passportNumber;
        this.vehicle = vehicle;
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getYearBorn() {
        return yearBorn;
    }

    public void setYearBorn(int yearBorn) {
        this.yearBorn = yearBorn;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
