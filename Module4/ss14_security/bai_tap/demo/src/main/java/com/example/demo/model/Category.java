package com.example.demo.model;

import java.util.EnumSet;

public enum Category {
    NULL(0),
    REVIEW(1),
    REACTION(2),
    TUTORIAL(3);
    Integer id;

    Category(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public static Category getCategoryById(Integer id) {
        return EnumSet.allOf(Category.class).stream().filter(x -> x.getId().equals(id)).findFirst().orElse(NULL);
    }


}
