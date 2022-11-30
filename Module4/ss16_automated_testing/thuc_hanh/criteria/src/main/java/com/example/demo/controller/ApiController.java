package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ApiController {
    @Autowired
    ICustomerService service;

    @GetMapping("/")
    public ResponseEntity<List<Customer>> findAllNameAndAddress(@RequestParam(value = "name", defaultValue = "") String name,
                                                                @RequestParam(value = "address", defaultValue = "") String address) {
        return new ResponseEntity<>(service.findAll(name, address), HttpStatus.OK);
    }
}
