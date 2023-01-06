package com.todo.controller;

import com.todo.model.Account;
import com.todo.service.impl.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("account")
public class AccountControllerAPI {
    private final int MAX_DISPLAY = 5;
    @Autowired
    AccountServiceImpl service;

    @GetMapping("")
    public ResponseEntity<Page<Account>> findAllByNameCustomer(@RequestParam(name = "name", defaultValue = "") String name,
                                                               @RequestParam(name = "id", defaultValue = "") String id,
                                                               @PageableDefault(size = MAX_DISPLAY)
                                                                       Pageable pageable) {
        return new ResponseEntity<>(service.findAllByNameCustomerAndId(id, name, pageable), HttpStatus.OK);
    }

    @GetMapping("/term/{id}")
    public ResponseEntity<List<Account>> findAllByTerm(@PathVariable(name = "id") Long id) {
        return new ResponseEntity<>(service.findAllByTerm(id), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> findById(@PathVariable Long id) {
        return new ResponseEntity<>(service.findById(id), HttpStatus.OK);
    }

    @PostMapping("")
    ResponseEntity<Account> saveData(@RequestBody Account account) {
         return new ResponseEntity<>(service.save(account), HttpStatus.OK);
    }

    @PatchMapping("")
    ResponseEntity<Account> updateStatusOff(@RequestBody Account account) {
        return new ResponseEntity<>(service.save(account), HttpStatus.OK);
    }

    @PutMapping("")
    ResponseEntity<Account> editAccount(@RequestBody Account account) {
        return new ResponseEntity<>(service.save(account), HttpStatus.OK);
    }
}
