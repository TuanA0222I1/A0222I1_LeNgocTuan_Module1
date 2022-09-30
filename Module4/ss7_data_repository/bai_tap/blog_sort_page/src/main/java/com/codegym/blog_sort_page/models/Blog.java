package com.codegym.blog_sort_page.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "blog")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String name;

    String content;

    String title;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false, referencedColumnName = ("id"))
    Category category;

    public Blog(BlogDTO blogDTO) {
        this.id = null;
        this.name = blogDTO.name;
        this.content = blogDTO.content;
        this.title = blogDTO.title;
        this.category = new Category(blogDTO.category);
    }
}
