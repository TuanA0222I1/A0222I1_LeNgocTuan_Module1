package com.codegym.blog_sort_page.repository;

import com.codegym.blog_sort_page.models.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IBlogRepository extends JpaRepository<Blog,Integer> {
    @Query(value = "select * from blog where name like concat('%',:name,'%')",
            nativeQuery = true,
            countQuery = "select count(*) from (select * from blog where name like concat('%',:name,'%')) blog ")
    Page<Blog> findAllByName(@Param("name") String name, Pageable pageable);
}
