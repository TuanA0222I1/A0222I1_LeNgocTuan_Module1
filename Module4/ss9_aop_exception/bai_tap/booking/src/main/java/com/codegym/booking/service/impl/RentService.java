package com.codegym.booking.service.impl;

import com.codegym.booking.models.Rent;
import com.codegym.booking.repository.IRentRepository;
import com.codegym.booking.service.IRentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RentService implements IRentService {
    @Autowired
    IRentRepository rentRepository;

    @Override
    public void save(Rent rent) {
        rentRepository.save(rent);
    }

    @Override
    public Iterable<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public Optional<Rent> findById(Integer id) {
        return rentRepository.findById(id);
    }

}
