package com.codegym.models;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.sql.Date;

@Entity
@Table(name = "user_demo")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Column(name = "point_reward")
    @Min(1)
    int point;

    @Column(name = "full_name")
    @NotEmpty(message = "Name not is empty")
    String name;

    @Column(name = "address")
    @NotEmpty(message = "Address not is empty")
    String address;

    @Column(name = "birthday")
    Date birthday;

    @Column(name = "phone")
    @Pattern(regexp = "^0//d{9}$", message = "phone not correct type")
    String phone;
}
