package com.example.demo.repos;

import com.example.demo.model.Smartphone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPhoneRepos extends JpaRepository<Smartphone, Long> {


    @Query("select p from Smartphone p where p.status = 'on'")
    List<Smartphone> findAll();

    List<Smartphone> findAllByModelContainsAndStatus(String model,String status);
}
