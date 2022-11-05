package com.example.demo.service;

import com.example.demo.model.Smartphone;
import com.example.demo.repos.IPhoneRepos;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PhoneService implements IPhoneService {
    @Autowired
    IPhoneRepos repos;

    @Override
    public List<Smartphone> findAll() {
        return repos.findAll();
    }


    @Override
    public Smartphone findById(Long id) {
        return repos.findById(id).orElse(null);
    }

    @Override
    public void save(Smartphone smartPhone) {
        repos.save(smartPhone);
    }

    @Override
    public List<Smartphone> findAllByModelContains(String model,String status ) {
        return repos.findAllByModelContainsAndStatus(model, status );
    }


}
