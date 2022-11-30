package com.example.demo.service;

import com.example.demo.model.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll(String name, String address);

}
