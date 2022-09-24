package com.codegym.service;

import java.util.List;

public interface ITypeService<E> {
    List<E> findAll();
}
