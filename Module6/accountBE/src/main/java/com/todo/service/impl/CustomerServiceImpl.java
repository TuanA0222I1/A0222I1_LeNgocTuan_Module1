package com.todo.service.impl;

import com.todo.model.Customer;
import com.todo.repos.CustomerRepos;
import com.todo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepos repos;

    @Override
    public List<Customer> findAll() {
        return repos.findAll();
    }

    @Override
    public Customer save(Customer customer) {
        return repos.save(customer);
    }
}
