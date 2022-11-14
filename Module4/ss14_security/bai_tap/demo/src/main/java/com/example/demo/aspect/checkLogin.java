package com.example.demo.aspect;

import com.example.demo.error.LoginBeforeAction;
import com.example.demo.repos.IAuthenticationFacade;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class checkLogin {
    @Autowired
    IAuthenticationFacade authentication;

    @Pointcut("execution( * com.example.demo.controller.BlogApiController.editData(..)) ")
    public void checkBeforeEdit() {
    }

    @Pointcut("execution( * com.example.demo.controller.BlogApiController.saveNewData(..)) ")
    public void checkBeforeCreate() {
    }

    @Pointcut("execution( * com.example.demo.controller.BlogApiController.deleteData(..)) ")
    public void checkBeforeDelete() {
    }

    @Before(value = " checkBeforeEdit() ||checkBeforeCreate()||checkBeforeDelete() ")
    public void handleCheck() throws LoginBeforeAction {
         if (authentication.getAuthentication().getPrincipal().equals("anonymousUser")) {
            throw new LoginBeforeAction("Login before do something ");
        }
    }
}
