package com.codegym.blog_sort_page.service;

import com.codegym.blog_sort_page.models.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IBlogService {
    Page<Blog> findAllByName(String name, Pageable pageable);

    Optional<Blog> findById(Integer id);


    Iterable<Blog> findAll();

    void save(Blog blog);

    void deleteById(Integer id);
}
