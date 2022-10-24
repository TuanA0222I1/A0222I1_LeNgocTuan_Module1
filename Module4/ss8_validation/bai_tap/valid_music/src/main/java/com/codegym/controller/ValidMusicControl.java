package com.codegym.controller;

import com.codegym.models.Music;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class ValidMusicControl {
    @GetMapping("/")
    public String goForm(Model model) {
        model.addAttribute("music",new Music());
        return "form";
    }

    @PostMapping("/checkValid")
    public String validUser(@Valid @ModelAttribute("music") Music music, BindingResult result, RedirectAttributes redirectAttributes, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("message", "Create Fail");
            return "form";
        }
        redirectAttributes.addFlashAttribute("message", "Create success");
        return "redirect:/";
    }
}
