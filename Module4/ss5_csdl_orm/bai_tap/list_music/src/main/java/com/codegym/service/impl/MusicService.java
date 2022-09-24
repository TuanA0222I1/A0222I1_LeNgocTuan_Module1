package com.codegym.service.impl;

import com.codegym.models.Music;
import com.codegym.repository.IBaseRepository;
import com.codegym.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService implements IBaseService<Music> {
    @Autowired
    IBaseRepository<Music> repository;

    @Override
    public List<Music> findAll() {
        return repository.findAll();
    }

    @Override
    public void addMusic(Music music) {
        repository.addMusic(music);
    }

    @Override
    public void edit(Music music) {
        repository.edit(music);
    }

    @Override
    public void delete(int id) {
        repository.delete(id);
    }

    @Override
    public Music findById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<Music> findByName(String name) {
        return repository.findByName(name);
    }
}
