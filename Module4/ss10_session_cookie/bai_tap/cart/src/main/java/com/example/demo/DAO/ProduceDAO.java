package com.example.demo.DAO;

import com.example.demo.model.Produce;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProduceDAO {
    Long id;

    String name;

    String avatar;

    @Min(0)
    Double price;

    Integer quantity;

    public ProduceDAO(Produce produce) {
        id = produce.getId();
        name = produce.getName();
        avatar = produce.getAvatar();
        price = produce.getPrice();
        quantity = 1;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProduceDAO that = (ProduceDAO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
