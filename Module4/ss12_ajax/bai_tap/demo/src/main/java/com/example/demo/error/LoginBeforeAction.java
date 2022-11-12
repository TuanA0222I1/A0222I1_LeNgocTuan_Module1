package com.example.demo.error;

public class LoginBeforeAction extends Exception {
    public LoginBeforeAction(String error) {
        super(error);
    }
}
