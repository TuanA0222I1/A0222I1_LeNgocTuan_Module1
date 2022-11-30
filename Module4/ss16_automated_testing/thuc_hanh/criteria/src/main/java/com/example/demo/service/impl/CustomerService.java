package com.example.demo.service.impl;

import com.example.demo.model.Customer;
import com.example.demo.repos.ICustomerCustomRepos;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    ICustomerCustomRepos repos;

    @Override
    public List<Customer> findAll(String name, String address) {
        return repos.findAll(name, address);
    }
}
