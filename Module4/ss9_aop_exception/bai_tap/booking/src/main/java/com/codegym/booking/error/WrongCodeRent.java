package com.codegym.booking.error;

public class WrongCodeRent extends Exception {
    public WrongCodeRent(String codeError) {
        super(codeError);
    }
}
