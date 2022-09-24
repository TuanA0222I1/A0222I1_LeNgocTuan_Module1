package com.codegym.service.impl;

import com.codegym.models.TypeMusic;
import com.codegym.repository.ITypeMusicRepository;
import com.codegym.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeMusicService implements ITypeService<TypeMusic> {
    @Autowired
    ITypeMusicRepository<TypeMusic> repository;
    @Override
    public List<TypeMusic> findAll() {
        return repository.findAll();
    }
}
