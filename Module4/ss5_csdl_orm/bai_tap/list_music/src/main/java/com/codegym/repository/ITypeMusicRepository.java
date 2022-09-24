package com.codegym.repository;

import java.util.List;

public interface ITypeMusicRepository<E>{
    List<E> findAll();
}
