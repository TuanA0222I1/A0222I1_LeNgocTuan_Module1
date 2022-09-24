package com.codegym.repository;

import java.util.List;

public interface IBaseRepository<E> {
    List<E> findAll();

    List<String> findAllPage();

    List<String> findAllLanguages();

    void save(E e);
}
