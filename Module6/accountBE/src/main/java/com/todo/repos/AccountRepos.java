package com.todo.repos;

import com.todo.model.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200/")

public interface AccountRepos extends JpaRepository<Account, Long> {
    @Query("select a from Account a where a.customer.name like concat('%',:name,'%') and a.status = 'on'")
    Page<Account> findAllByCustomerName(@Param("name") String name, Pageable pageable);

    @Query(value = "select account.id id, day_create, day_transfer, discount, money, rate, customer_id, term_id, status from account inner join customer on account.customer_id = customer.id where account.id like concat('%',:id,'%') and status ='on' and customer.name like concat('%',:name,'%') order by account.id",
            nativeQuery = true,
            countQuery = "select count(*) from ((select account.id id, day_create, day_transfer, discount, money, rate, customer_id, term_id, status from account inner join customer on account.customer_id = customer.id where account.id like concat('%',:id,'%') and status ='on' and customer.name like concat('%',:name,'%'))) account "
    )
    Page<Account> findAllByCustomerNameAndId(@Param("id") String id, @Param("name") String name, Pageable pageable);
}