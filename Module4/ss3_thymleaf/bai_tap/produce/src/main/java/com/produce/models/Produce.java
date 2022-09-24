package com.produce.models;

import lombok.*;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ModelAttribute;


public class Produce {
    int id;
    String name;
    int price;
    String other;
    String manufacturer;

    public Produce() {
    }

    public Produce(int id, String name, int price, String other, String manufacturer) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.other = other;
        this.manufacturer = manufacturer;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
}
