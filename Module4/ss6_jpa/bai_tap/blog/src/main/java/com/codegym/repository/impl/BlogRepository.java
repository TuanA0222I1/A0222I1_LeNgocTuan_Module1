package com.codegym.repository.impl;

import com.codegym.models.Blog;
import com.codegym.repository.IBlogRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class BlogRepository implements IBlogRepository {
    String findAllByName = "select b from Blog b where b.name like concat('%',:name,'%')";
    String findAllById = "select b from Blog b where b.id = :id";

    @Override
    public void addBlog(Blog blog) {
        EntityTransaction entityTransaction = BaseRepository.entityManager.getTransaction();
        entityTransaction.begin();
        BaseRepository.entityManager.persist(blog);
        entityTransaction.commit();
    }

    @Override
    public void edit(Blog blog) {
        EntityTransaction entityTransaction = BaseRepository.entityManager.getTransaction();
        entityTransaction.begin();
        BaseRepository.entityManager.merge(blog);
        entityTransaction.commit();
    }

    @Override
    public void delete(int id) {
        EntityTransaction entityTransaction = BaseRepository.entityManager.getTransaction();
        entityTransaction.begin();
        BaseRepository.entityManager.remove(BaseRepository.entityManager.find(Blog.class, id));
        entityTransaction.commit();
    }

    @Override
    public Blog findById(int id) {
        return BaseRepository.entityManager.find(Blog.class, id);
    }

    @Override
    public List<Blog> findByName(String name_search) {
        TypedQuery<Blog> query = BaseRepository.entityManager.createQuery(findAllByName, Blog.class);
        query.setParameter("name", name_search);
        return query.getResultList();
    }
}
