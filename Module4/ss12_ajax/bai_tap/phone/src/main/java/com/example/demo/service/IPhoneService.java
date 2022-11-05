package com.example.demo.service;

import com.example.demo.model.Smartphone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPhoneService {
    List<Smartphone> findAll();


    Smartphone findById(Long id);

    void save(Smartphone smartPhone);

    List<Smartphone> findAllByModelContains(String model ,String status);
}
