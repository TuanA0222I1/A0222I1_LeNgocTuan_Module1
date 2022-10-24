package com.codegym.booking.service.impl;

import com.codegym.booking.models.Book;
import com.codegym.booking.repository.IBookRepository;
import com.codegym.booking.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookService implements IBookService {
    @Autowired
    IBookRepository repository;

    @Override
    public Iterable<Book> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Book> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public void save(Book book) {
        repository.save(book);
    }
}
