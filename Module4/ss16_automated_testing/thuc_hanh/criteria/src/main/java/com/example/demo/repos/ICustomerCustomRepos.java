package com.example.demo.repos;

import com.example.demo.model.Customer;

import java.util.List;

public interface ICustomerCustomRepos {
    List<Customer> findAll(String name,String address);

}
