package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.IBlogService;
import com.example.demo.utils.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.security.Principal;
import java.util.Arrays;
import java.util.List;

@Controller
public class ViewController {
    List<Category> roleList = Arrays.asList(Category.values());

    @Autowired
    IBlogService service;

    @GetMapping("/")
    public String goHome(Model model) {
        model.addAttribute("list", service.findAll());
        model.addAttribute("categoryList", roleList);
        return "home";
    }

    @GetMapping("/login")
    public String goLogin() {
        return "login";
    }

    @RequestMapping(value = "/userInfo", method = RequestMethod.GET)
    public String userInfo(Model model, Principal principal) {

        // Sau khi user login thanh cong se co principal
        String userName = principal.getName();

        System.out.println("User Name: " + userName);

        User login = (User) ((Authentication) principal).getPrincipal();

        String userInfo = WebUtils.toString(login);
        model.addAttribute("userInfo", userInfo);

        return "userInfoPage";
    }
}
