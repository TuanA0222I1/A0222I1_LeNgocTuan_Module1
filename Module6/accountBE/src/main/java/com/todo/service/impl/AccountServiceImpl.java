package com.todo.service.impl;

import com.todo.model.Account;
import com.todo.repos.AccountRepos;
import com.todo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepos repos;

    @Override
    public Page<Account> findAllByNameCustomer(String name, Pageable pageable) {
        return repos.findAllByCustomerName(name, pageable);
    }

    @Override
    public Page<Account> findAllByNameCustomerAndId(String id, String name, Pageable pageable) {
        return repos.findAllByCustomerNameAndId(id, name, pageable);
    }

    @Override
    public Account findById(Long id) {
        assert repos.findById(id).isPresent();
        return repos.findById(id).get();
    }

    @Override
    public Account save(Account account) {
        return repos.save(account);
    }
}
