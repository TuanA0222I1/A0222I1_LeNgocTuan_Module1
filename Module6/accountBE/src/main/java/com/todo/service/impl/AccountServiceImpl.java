package com.todo.service.impl;

import com.todo.error.exceptionCustom.NotFoundAccount;
import com.todo.model.Account;
import com.todo.repos.AccountRepos;
import com.todo.service.AccountService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @SneakyThrows
    @Override
    public Account findById(Long id) {
        if (repos.findById(id).isPresent()) {
            return repos.findById(id).get();
        }
        throw new NotFoundAccount("Server not found any account with id " + id);
    }

    @Override
    public List<Account> findAllByTerm(Long id) {
        return repos.findAllByTermId(id);
    }

    @Override
    public Account save(Account account) {
        return repos.save(account);
    }
}
