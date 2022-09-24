package com.codegym.controller;

import com.codegym.models.Mail;
import com.codegym.service.IBaseService;
import com.codegym.service.impl.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    @Autowired
    IBaseService<Mail> service = new MailService();

    @RequestMapping("/")
    public ModelAndView goHome(ModelAndView modelAndView) {
        modelAndView.setViewName("/home");
        modelAndView.addObject("mail", new Mail());
        modelAndView.addObject("pageList",service.findAllPage());
        modelAndView.addObject("languagesList", service.findAllLanguages());
        return modelAndView;
    }
    @RequestMapping("/create")
    public ModelAndView saveMail(Mail mail, ModelAndView modelAndView){
        service.save(mail);
        modelAndView.addObject("list",service.findAll());
        modelAndView.setViewName("/info");
        return modelAndView;
    }
}
