package com.example.demo.service;

import com.example.demo.model.Blog;
import com.example.demo.repos.IBlogRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements IBlogService {
    @Autowired
    IBlogRepos repos;

    @Override
    public List<Blog> findAll() {
        return repos.findAll();
    }

    @Override
    public Blog save(Blog blog) {
        return repos.save(blog);
    }

    @Override
    public void removeById(Long id) {
        repos.deleteById(id);
    }
}
