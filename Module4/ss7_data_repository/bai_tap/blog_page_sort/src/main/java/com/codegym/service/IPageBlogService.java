package com.codegym.service;

import com.codegym.models.Blog;
import com.codegym.repository.IPageBlogRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IPageBlogService {
    Page<Blog> findAllByName(String name, Pageable pageable);

    void save(Blog blog);

    Optional<Blog> findById(Integer id);

    void remove(Integer id);
}
