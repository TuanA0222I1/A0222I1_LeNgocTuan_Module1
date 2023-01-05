package com.todo.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.sql.Date;

@Entity
@Table(name = "account")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder

public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @FutureOrPresent
    Date dayCreate;

    Date dayTransfer;

    @NotBlank
    String discount;

    @Min(1000000)
    Double money;

    @Min(0)
    @Max(1)
    Float rate;

    @ManyToOne
    @JoinColumn(columnDefinition = "customer_id", nullable = false, referencedColumnName = "id")
    Customer customer;

    @ManyToOne
    @JoinColumn(columnDefinition = "term_id", nullable = false, referencedColumnName = "id")
    Term term;

    String status;
}
