package com.todo.error.exceptionCustom;

public class NotFoundAccount extends Exception {
    public NotFoundAccount(String error) {
        super(error);
    }
}
