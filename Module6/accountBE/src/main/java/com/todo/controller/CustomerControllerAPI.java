package com.todo.controller;

import com.todo.model.Customer;
import com.todo.service.impl.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("customer")
public class CustomerControllerAPI {
    @Autowired
    CustomerServiceImpl service;

    @PostMapping("")
    public ResponseEntity<Customer> saveData(@RequestBody Customer customer) {
        return new ResponseEntity<>(service.save(customer), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Customer> editData(@RequestBody Customer customer) {
        return new ResponseEntity<>(service.save(customer), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<Boolean> findByName(@RequestParam String name) {
        return new ResponseEntity<>(service.findByName(name), HttpStatus.OK);
    }
}
