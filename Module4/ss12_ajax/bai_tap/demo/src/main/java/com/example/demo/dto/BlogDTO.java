package com.example.demo.dto;

import com.example.demo.model.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BlogDTO {
    Long id;

    @NotBlank(message = "name input something!!!")
    String name;

    @NotBlank(message = "content input something!!!")
    String content;

    @NotBlank(message = "title input something!!!")
    String title;

    @Min(value = 1, message = "category shouldn't null, choice something!!!")
    Integer category;
}
