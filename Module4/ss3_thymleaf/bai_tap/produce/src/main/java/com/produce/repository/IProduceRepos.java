package com.produce.repository;

import com.produce.models.Produce;

import java.util.Map;

public interface IProduceRepos<E> {
    Produce findById(int id);

    Map<Integer, E> findByName(String name);

    void removeById(int id);

    void save(E e);

    void update(E e);

    Map<Integer, E> findAll();
}
