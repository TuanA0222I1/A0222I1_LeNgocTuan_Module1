package com.todo.service.impl;

import com.todo.model.Term;
import com.todo.repos.TermRepos;
import com.todo.service.TermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TermServiceImpl implements TermService {
    @Autowired
    TermRepos repos;

    public List<Term> findAll(){
        return repos.findAll();
    }
}
