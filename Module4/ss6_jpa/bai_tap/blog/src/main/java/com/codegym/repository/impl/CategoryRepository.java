package com.codegym.repository.impl;

import com.codegym.models.Category;
import com.codegym.repository.ICategoryRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class CategoryRepository implements ICategoryRepository {
    String findAll = "select  c from  Category c ";

    @Override
    public List<Category> findAll() {
        TypedQuery<Category> query = BaseRepository.entityManager.createQuery(findAll, Category.class);
        return query.getResultList();
    }

}
