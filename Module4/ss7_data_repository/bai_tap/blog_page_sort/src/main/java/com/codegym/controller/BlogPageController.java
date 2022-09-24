package com.codegym.controller;

import com.codegym.service.IPageBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BlogPageController {
    @Autowired
    IPageBlogService service;

    @GetMapping("")
    public String goList(@RequestParam(value = "name", defaultValue = "") String name,
                         @PageableDefault(value = 5, sort = "name", direction = Sort.Direction.ASC) Pageable pageable,
                         Model model) {
        model.addAttribute("list", service.findAllByName(name, pageable));
        return "list";
    }
}
