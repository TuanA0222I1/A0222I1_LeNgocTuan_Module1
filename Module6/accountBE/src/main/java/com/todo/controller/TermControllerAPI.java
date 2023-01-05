package com.todo.controller;

import com.todo.model.Term;
import com.todo.service.impl.TermServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("term")
public class TermControllerAPI {
    @Autowired
    TermServiceImpl service;

    @GetMapping("")
    ResponseEntity<List<Term>> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }
}
