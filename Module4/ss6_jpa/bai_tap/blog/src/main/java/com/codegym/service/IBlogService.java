package com.codegym.service;

import com.codegym.models.Blog;
import com.codegym.models.Category;

import java.util.List;

public interface IBlogService {

    void edit(Blog blog);

    void delete(int id);

    Blog findById(int id);

    List<Blog> findByName(String name);

    void save(Blog blog);
}
