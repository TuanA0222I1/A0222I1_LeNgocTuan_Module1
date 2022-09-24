package com.produce.service;

import com.produce.models.Produce;

import java.util.List;
import java.util.Map;

public interface IProduceService<E> {
    Produce findById(int id);

    void removeById(int id);

    void save(E e);

    void update(E e);

    Map<Integer, E> findAll();

    Map<Integer, E> findByName(String name);
}
