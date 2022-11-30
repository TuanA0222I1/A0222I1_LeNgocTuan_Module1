package com.example.product.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Data
public class ProduceDto {

    @NotNull(message = "name field should be not null")
    String name;

    @NotBlank(message = "dateToUse field should be not null")
    String dateToUse;

    @NotNull(message = "nation field should be not null")
    String nation;

    @NotNull(message = "avatar field should be not null")
    String avatar;

    @NotNull(message = "color field should be not null")
    String color;

    @NotNull(message = "promote field should be not null")
    Boolean promote;
}
