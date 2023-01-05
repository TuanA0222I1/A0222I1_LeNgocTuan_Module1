package com.todo.error;

import com.todo.error.exceptionCustom.NotFoundAccount;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ControllerError {
    @ExceptionHandler(NotFoundAccount.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> notFoundHandle(NotFoundAccount e) {
        Map<String, String> map = new HashMap<>();
        map.put("messageerror", e.getMessage());
        return map;
    }
}
