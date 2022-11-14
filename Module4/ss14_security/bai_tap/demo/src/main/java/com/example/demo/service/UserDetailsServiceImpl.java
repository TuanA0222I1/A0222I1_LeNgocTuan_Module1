package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.repos.IUserRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    IUserRepos iUserRepos;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Customer customerName = iUserRepos.findByUsername(username);

        if (customerName == null) {
            System.out.println("Customer not found! " + username);
            throw new UsernameNotFoundException("Customer " + username + " was not found in the database");
        }

        System.out.println("Found Customer: " + customerName);

        List<GrantedAuthority> grantList = new ArrayList<>();

        return  new User(customerName.getUsername(),
                customerName.getPassword(), grantList);
    }
}
