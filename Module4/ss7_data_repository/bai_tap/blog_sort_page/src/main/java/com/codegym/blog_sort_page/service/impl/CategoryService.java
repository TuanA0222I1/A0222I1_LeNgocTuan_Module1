package com.codegym.blog_sort_page.service.impl;

import com.codegym.blog_sort_page.models.Category;
import com.codegym.blog_sort_page.repository.ICategoryRepository;
import com.codegym.blog_sort_page.service.IBlogService;
import com.codegym.blog_sort_page.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    ICategoryRepository repository;

    @Override
    public Iterable<Category> findAll() {
        return repository.findAll();
    }
}
