package com.codegym.models;

import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Builder
@Component
public class User {
    int id;
    String name;
    String contractNumber;

    public User() {
    }

    public User(int id, String name, String contractNumber) {
        this.id = id;
        this.name = name;
        this.contractNumber = contractNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContractNumber() {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber) {
        this.contractNumber = contractNumber;
    }
}
