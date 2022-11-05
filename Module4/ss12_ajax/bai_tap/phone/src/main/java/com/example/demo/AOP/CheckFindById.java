package com.example.demo.AOP;

import com.example.demo.error.customer.NotFoundById;
import com.example.demo.service.IPhoneService;
import lombok.SneakyThrows;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class CheckFindById {
    @Autowired
    IPhoneService service;

    @Pointcut("execution(* com.example.demo.controller.PhoneApiController.findById(..)) && args(id)")
    public void checkResultInFindById(Long id) {

    }

    @Pointcut("execution(* com.example.demo.controller.PhoneApiController.updatePhone(..)) && args(id)")
    public void checkResultInUpdatePhone(Long id) {

    }

    @SneakyThrows
    @Before(value = "checkResultInFindById(id) || checkResultInUpdatePhone(id)", argNames = "id")
    public void checkFindByIdInRequest(Long id) {
        if (service.findById(id) == null) {
            throw new NotFoundById("Not Found with " + id);
        }
    }
}
