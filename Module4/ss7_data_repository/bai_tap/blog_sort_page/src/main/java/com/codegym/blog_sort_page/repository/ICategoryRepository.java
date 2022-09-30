package com.codegym.blog_sort_page.repository;

import com.codegym.blog_sort_page.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Integer> {
}
