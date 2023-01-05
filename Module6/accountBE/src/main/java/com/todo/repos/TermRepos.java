package com.todo.repos;

import com.todo.model.Term;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200/")

public interface TermRepos extends JpaRepository<Term, Long> {
}
