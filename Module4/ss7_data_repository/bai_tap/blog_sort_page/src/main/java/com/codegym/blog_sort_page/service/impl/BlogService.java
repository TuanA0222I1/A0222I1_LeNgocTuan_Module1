package com.codegym.blog_sort_page.service.impl;

import com.codegym.blog_sort_page.models.Blog;
import com.codegym.blog_sort_page.repository.IBlogRepository;
import com.codegym.blog_sort_page.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BlogService implements IBlogService {
    @Autowired
    IBlogRepository repository;

    @Override
    public Page<Blog> findAllByName(String name, Pageable pageable) {
        return repository.findAllByName(name, pageable);
    }

    @Override
    public Optional<Blog> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<Blog> findAll() {
        return repository.findAll();
    }

    @Override
    public void save(Blog blog) {
        repository.save(blog);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
