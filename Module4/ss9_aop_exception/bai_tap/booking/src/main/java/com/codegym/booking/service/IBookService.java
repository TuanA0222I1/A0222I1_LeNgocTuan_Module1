package com.codegym.booking.service;

import com.codegym.booking.models.Book;

import java.util.Optional;

public interface IBookService {
    Iterable<Book> findAll();

    Optional<Book> findById(Integer id);

    void save(Book book);
}
