package com.codegym.controller;

import com.codegym.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class UserController {
    @GetMapping("/")
    public String goHome(Model model) {
        model.addAttribute("user", new User());
        return "/home";
    }

    @PostMapping("/create")
    public String getInfoNewUser(RedirectAttributes redirectAttributes, User user) {
        redirectAttributes.addFlashAttribute("info", user);
        redirectAttributes.addFlashAttribute("message", "Create New Success!!!");
        redirectAttributes.addFlashAttribute("user", new User());
        return "redirect:/";
    }
}


