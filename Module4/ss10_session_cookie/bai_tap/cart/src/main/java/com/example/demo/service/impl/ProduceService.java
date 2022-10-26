package com.example.demo.service.impl;

import com.example.demo.model.Produce;
import com.example.demo.repos.IProduceRepos;
import com.example.demo.service.IProduceService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProduceService implements IProduceService {
    @Autowired
    IProduceRepos repos;

    @Override
    public Iterable<Produce> findAll() {
        return repos.findAll();
    }

    @SneakyThrows
    @Override
    public Produce findById(Long id) {
        Optional<Produce> produce = repos.findById(id);
        if (produce.isPresent()) return produce.get();
        throw new Exception("Not Found any produce with id " + id);
    }


}
