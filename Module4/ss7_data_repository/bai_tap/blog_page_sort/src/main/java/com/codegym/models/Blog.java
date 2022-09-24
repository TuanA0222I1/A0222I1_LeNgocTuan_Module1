package com.codegym.models;


import com.codegym.dto.BlogDTO;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
@Table(name = "blog")

public class Blog implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;

    String content;

    String title;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false, referencedColumnName = ("id"))
    Category category;

    public Blog() {
    }

    public Blog(BlogDTO blogDTO) {
        Category category = new Category();
        category.setId(blogDTO.getCategory_id());
        this.name = blogDTO.getName();
        this.content = blogDTO.getContent();
        this.title = blogDTO.getTitle();
        this.category = category;
    }

    public Blog(int id, @NotBlank String name, @NotBlank String content, @NotBlank String title, Category category) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.title = title;
        this.category = category;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
