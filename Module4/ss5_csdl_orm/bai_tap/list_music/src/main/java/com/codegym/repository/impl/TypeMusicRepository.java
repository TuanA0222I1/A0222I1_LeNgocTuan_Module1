package com.codegym.repository.impl;

import com.codegym.models.TypeMusic;
import com.codegym.repository.ITypeMusicRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;
@Repository
public class TypeMusicRepository implements ITypeMusicRepository<TypeMusic> {
    String findAll = "select t from TypeMusic  as t";

    @Override
    public List<TypeMusic> findAll() {
        TypedQuery<TypeMusic> list = BaseRepository.entityManager.createQuery(findAll, TypeMusic.class);
        return list.getResultList();
    }
}
