package com.codegym.blog_sort_page.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BlogDTO {
    @Min(1)
    Integer id;

    @NotBlank
    String name;

    @NotBlank
    String content;

    @NotBlank
    String title;

    @Min(1)
    Integer category;

    public BlogDTO(Blog blog) {
        this.id = blog.id;
        this.name = blog.name;
        this.content = blog.content;
        this.title = blog.title;
        this.category = blog.category.id;
    }
}
