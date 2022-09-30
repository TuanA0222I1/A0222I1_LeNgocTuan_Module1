package com.codegym.blog_sort_page.service;

import com.codegym.blog_sort_page.models.Category;

public interface ICategoryService {
    Iterable<Category> findAll();
}
