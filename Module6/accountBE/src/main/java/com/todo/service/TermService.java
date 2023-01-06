package com.todo.service;

import com.todo.model.Account;
import com.todo.model.Term;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface TermService {
    List<Term> findAll();
}
