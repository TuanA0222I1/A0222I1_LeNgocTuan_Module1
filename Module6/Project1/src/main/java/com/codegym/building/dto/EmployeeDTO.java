package com.codegym.building.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EmployeeDTO {
    String avatar;
    String name;
    String birthday;
    String gender;
    Double salary;
    String id_card;
    String address;
    String phone;
    String email;
    String salaryScale;
    String department;
    String account;
    String password;
}
