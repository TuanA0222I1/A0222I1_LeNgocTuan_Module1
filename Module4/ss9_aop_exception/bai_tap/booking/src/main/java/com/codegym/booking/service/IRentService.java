package com.codegym.booking.service;

import com.codegym.booking.models.Rent;

import java.util.Optional;

public interface IRentService {
    void save(Rent rent);

    Iterable<Rent> findAll();

    Optional<Rent> findById(Integer id);
}
