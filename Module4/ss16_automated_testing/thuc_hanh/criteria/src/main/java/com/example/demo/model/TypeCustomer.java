package com.example.demo.model;

public enum TypeCustomer {
    Diamond(1),
    Platinum(2),
    Gold(3),
    Silve(4),
    Member(5);
    int id;

    TypeCustomer(int id) {
        this.id = id;
    }
}
