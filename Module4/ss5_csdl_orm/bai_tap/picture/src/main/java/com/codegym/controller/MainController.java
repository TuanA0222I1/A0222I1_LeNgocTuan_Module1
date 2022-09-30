package com.codegym.controller;

import com.codegym.models.Comment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
    @RequestMapping("/")
    public String goIndex(Model model) {
        model.addAttribute("comment", new Comment());
        return "/index";
    }
}
