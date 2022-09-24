package com.codegym.service.impl;

import com.codegym.models.Blog;
import com.codegym.models.Category;
import com.codegym.repository.IBlogRepository;
import com.codegym.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService implements IBlogService {
    @Autowired
    IBlogRepository repository;

    @Override
    public void edit(Blog blog) {
        repository.edit(blog);
    }

    @Override
    public void delete(int id) {
        repository.delete(id);
    }

    @Override
    public Blog findById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<Blog> findByName(String name) {
        return repository.findByName(name);
    }

    @Override
    public void save(Blog blog) {
        repository.addBlog(blog);
    }
}
