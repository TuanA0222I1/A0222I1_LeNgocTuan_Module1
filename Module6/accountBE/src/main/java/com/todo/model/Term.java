package com.todo.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name ="term")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder

public class Term {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;
}
