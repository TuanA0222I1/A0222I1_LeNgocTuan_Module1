package com.example.demo.repos.impl;

import com.example.demo.model.Customer;
import com.example.demo.repos.ICustomerCustomRepos;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import java.util.List;

@Repository
public class CustomerCustomRepos implements ICustomerCustomRepos {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Customer> findAll(String name, String address) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery criteriaQuery = criteriaBuilder.createQuery();
        Root<Customer> customerRoot = criteriaQuery.from(Customer.class);
        Predicate namePredicate = criteriaBuilder.equal(customerRoot.get("name"), name);
        Predicate addressPredicate = criteriaBuilder.equal(customerRoot.get("address"), address);
        criteriaQuery.where(namePredicate, addressPredicate);
        TypedQuery<Customer> typedQuery = entityManager.createQuery(criteriaQuery);
        return typedQuery.getResultList();
    }
}
