package com.todo.service;

import com.todo.model.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface AccountService {
    Page<Account> findAllByNameCustomer(String name, Pageable pageable);

    Page<Account> findAllByNameCustomerAndId(String id, String name, Pageable pageable);

    Account findById(Long id);

    List<Account> findAllByTerm(Long id);

    Account save(Account account);
}
