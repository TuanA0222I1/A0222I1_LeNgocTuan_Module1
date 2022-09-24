package com.codegym.repository;

import com.codegym.models.Category;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ICategoryRepository  {

    List<Category> findAll();


}
