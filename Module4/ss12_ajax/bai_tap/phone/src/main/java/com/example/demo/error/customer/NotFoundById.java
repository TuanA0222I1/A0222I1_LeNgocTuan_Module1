package com.example.demo.error.customer;

public class NotFoundById extends Exception {
    public NotFoundById(String errorLine) {
        super(errorLine);
    }
}
