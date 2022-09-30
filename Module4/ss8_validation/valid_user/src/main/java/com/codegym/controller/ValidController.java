package com.codegym.controller;

import com.codegym.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class ValidController {
    @GetMapping("/")
    public String goForm(Model model) {
        model.addAttribute("user", new User());
        return "form";
    }

    @PostMapping("/checkValid")
    public String validUser(@Valid @ModelAttribute("user") User user, BindingResult result, RedirectAttributes redirectAttributes, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("message", "Create Fail");
            return "form";
        }
        redirectAttributes.addFlashAttribute("message", "Create success");
        return "redirect:/";
    }
}
