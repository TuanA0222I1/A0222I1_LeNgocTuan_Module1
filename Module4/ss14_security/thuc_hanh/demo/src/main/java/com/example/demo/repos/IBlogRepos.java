package com.example.demo.repos;

import com.example.demo.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBlogRepos extends JpaRepository<Blog, Long> {
}
