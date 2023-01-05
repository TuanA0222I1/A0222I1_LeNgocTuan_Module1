package com.todo.service;

import com.todo.model.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> findAll();

    Customer save(Customer customer);
}
