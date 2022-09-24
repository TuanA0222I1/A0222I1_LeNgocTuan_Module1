package com.codegym.repository;

import com.codegym.models.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IPageBlogRepository extends PagingAndSortingRepository<Blog, Integer> {

    @Query("select  b from Blog b where b.name like  concat('%',:name,'%')")
    Page<Blog> findAllByName(@Param("name") String name, Pageable pageable);
}
