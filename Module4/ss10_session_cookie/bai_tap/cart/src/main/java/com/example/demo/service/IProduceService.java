package com.example.demo.service;

import com.example.demo.model.Produce;

public interface IProduceService {
    Iterable<Produce> findAll();

    Produce findById(Long id);
}
