package com.codegym.service.impl;

import com.codegym.models.Blog;
import com.codegym.repository.IPageBlogRepository;
import com.codegym.service.IPageBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PageBlogService implements IPageBlogService {
    @Autowired
    IPageBlogRepository repository;

    @Override
    public Page<Blog> findAllByName(String name, Pageable pageable) {
        return repository.findAllByName(name, pageable);
    }

    @Override
    public void save(Blog blog) {

    }

    @Override
    public Optional<Blog> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void remove(Integer id) {

    }
}
