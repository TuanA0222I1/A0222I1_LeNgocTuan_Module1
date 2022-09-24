package com.produce.service;

import com.produce.models.Produce;
import com.produce.repository.IProduceRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProduceService implements IProduceService<Produce> {
    @Autowired
    IProduceRepos<Produce> produceIProduceService;

    @Override
    public Produce findById(int id) {
        return produceIProduceService.findById(id);
    }

    @Override
    public void removeById(int id) {
        produceIProduceService.removeById(id);
    }

    @Override
    public void save(Produce produce) {
        produceIProduceService.save(produce);
    }

    @Override
    public void update(Produce produce) {
        produceIProduceService.update(produce);
    }

    @Override
    public Map<Integer, Produce> findAll() {
        return produceIProduceService.findAll();
    }

    @Override
    public Map<Integer, Produce> findByName(String name) {
        return produceIProduceService.findByName(name.toLowerCase());
    }
}
