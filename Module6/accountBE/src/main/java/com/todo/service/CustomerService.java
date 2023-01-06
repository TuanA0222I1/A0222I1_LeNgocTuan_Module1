package com.todo.service;

import com.todo.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    List<Customer> findAll();

    Customer save(Customer customer);

   boolean findByName(String name);
}
