package com.codegym.service;

import java.util.List;

public interface IBaseService<E> {
    List<E> findAll();

    List<String> findAllPage();

    List<String> findAllLanguages();

    void save(E e);
}
