package com.example.demo.model;

import com.example.demo.dto.BlogDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;


    String content;


    String title;

    @Column(name = "category_id")

    Category category;

    public Blog(BlogDTO blogDTO) {
        this.name = blogDTO.getName();
        this.content = blogDTO.getContent();
        this.title = blogDTO.getTitle();
        this.category = Category.getCategoryById( blogDTO.getCategory());
    }
}
