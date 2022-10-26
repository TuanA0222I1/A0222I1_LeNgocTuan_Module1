package com.example.demo.repos;

import com.example.demo.model.Produce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProduceRepos extends JpaRepository<Produce, Long> {
}
