package com.example.demo.service;


import com.example.demo.model.Blog;

import java.util.List;

public interface IBlogService {
    List<Blog> findAll();

    Blog save(Blog blog);

    void removeById(Long id);
}
