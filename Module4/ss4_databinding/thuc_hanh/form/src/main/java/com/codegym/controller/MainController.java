package com.codegym.controller;

import com.codegym.models.Person;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Controller
public class MainController {
    @GetMapping("/")
    public ModelAndView goForm() {
        return new ModelAndView("/home", "person", new Person());
    }

    @PostMapping("/create")
    public String save(@Valid @ModelAttribute("person") Person person, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "/home";
        }
        return "/list";
    }
}
