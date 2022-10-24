package com.codegym.booking.error;

public class QuantityZero extends Exception {
    public QuantityZero(String errorLine){
        super(errorLine);
    }
}
