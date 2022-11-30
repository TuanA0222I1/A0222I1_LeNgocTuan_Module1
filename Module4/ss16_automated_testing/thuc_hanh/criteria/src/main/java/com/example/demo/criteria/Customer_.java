package com.example.demo.criteria;

import com.example.demo.model.Customer;
import com.example.demo.model.Gender;
import com.example.demo.model.TypeCustomer;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import java.sql.Date;

@StaticMetamodel(Customer.class)
public class Customer_ {
    public static volatile SingularAttribute<Customer, Long> id;
    public static volatile SingularAttribute<Customer, TypeCustomer> typeCustomer;
    public static volatile SingularAttribute<Customer, String> name;
    public static volatile SingularAttribute<Customer, Date> birthday;
    public static volatile SingularAttribute<Customer, String> id_card;
    public static volatile SingularAttribute<Customer, String> phone;
    public static volatile SingularAttribute<Customer, String> email;
    public static volatile SingularAttribute<Customer, Gender> gender;
    public static volatile SingularAttribute<Customer, String> address;

}
