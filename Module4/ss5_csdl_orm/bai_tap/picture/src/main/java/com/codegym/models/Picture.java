package com.codegym.models;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "picture")
public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "day_in")
    Timestamp dayIn;
}
