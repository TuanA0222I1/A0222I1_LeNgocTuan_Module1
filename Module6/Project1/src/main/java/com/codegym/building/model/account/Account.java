package com.codegym.building.model.account;

import com.codegym.building.dto.AccountDTO;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "account")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    @Id
    @Column(name = "user_name")
    String user_name;

    String password;

    String status;

    @Column(name = "datecreate")
    @CreatedDate
    Date dateCreate;

    @ManyToMany
    @JoinTable(
            name = "account_role",
            joinColumns = @JoinColumn(name = "user_name"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    List<Roles> list;

    public Account(AccountDTO accountDTO) {
        this.user_name = accountDTO.getUsername();
        this.password = accountDTO.getPassword();

    }

    public Account(String account, String password) {
        this.user_name = account;
        this.password = password;
        this.dateCreate = Date.valueOf(LocalDate.now());
        this.status = "on";
    }
}
