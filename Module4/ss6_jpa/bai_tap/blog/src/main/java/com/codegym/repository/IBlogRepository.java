package com.codegym.repository;

import com.codegym.models.Blog;

import java.util.List;


public interface IBlogRepository  {
    void addBlog(Blog blog);

    void edit(Blog blog);

    void delete(int id);

    Blog findById(int id);

    List<Blog> findByName(String name);
}
