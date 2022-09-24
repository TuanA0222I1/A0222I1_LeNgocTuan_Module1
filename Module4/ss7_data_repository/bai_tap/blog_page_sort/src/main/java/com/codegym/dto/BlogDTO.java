package com.codegym.dto;

import com.codegym.models.Blog;

import javax.validation.constraints.NotBlank;

public class BlogDTO {
    int id;

    @NotBlank(message = "name not blank")
    String name;

    @NotBlank(message = "content not blank")
    String content;

    @NotBlank(message = "title not blank")
    String title;

    int category_id;

    public BlogDTO() {
    }

    public BlogDTO(int id, String name, String content, String title, int category_id) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.title = title;
        this.category_id = category_id;
    }

    public BlogDTO(Blog blog){
        this.id =  blog.getId();
        this.name = blog.getName();
        this.content = blog.getContent();
        this.title = blog.getTitle();
        this.id = blog.getCategory().getId();
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

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }
}
