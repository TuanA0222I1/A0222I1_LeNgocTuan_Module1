package com.example.demo.repos;

import com.example.demo.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepos extends JpaRepository<Customer, Long> {
    Customer findByUsername(String username);

}
