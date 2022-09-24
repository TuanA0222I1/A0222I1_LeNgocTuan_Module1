package com.codegym.service.impl;

import com.codegym.models.Category;
import com.codegym.repository.ICategoryRepository;
import com.codegym.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryService implements ICategoryService {
    @Autowired
    ICategoryRepository repository;

    @Override
    public List<Category> findAll() {
        return repository.findAll();
    }
}
