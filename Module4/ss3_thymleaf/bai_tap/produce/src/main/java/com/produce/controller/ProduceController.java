package com.produce.controller;

import com.produce.models.Produce;
import com.produce.service.IProduceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ProduceController {
    @Autowired
    IProduceService<Produce> iProduceService;

    @GetMapping("/")
    public String goHome(Model model) {
        model.addAttribute("list", iProduceService.findAll());
        return "/home";
    }

    @GetMapping("/search_name")
    public String findByName(@RequestParam String name_search, Model model) {
        model.addAttribute("list", iProduceService.findByName(name_search));
        return "/home";
    }

    @GetMapping("/delete/{id}")
    public String deleteById(@PathVariable int id, Model model) {
        iProduceService.removeById(id);
        model.addAttribute("list", iProduceService.findAll());
        return "/home";
    }

    @GetMapping("/create")
    public String create(Model model) {
        model.addAttribute("produce", new Produce());
        return "/create";
    }

    @GetMapping("/edit/{id}")
    public String edit(Model model, @PathVariable int id) {
        model.addAttribute("produce", iProduceService.findById(id));
        return "/edit";
    }

    @PostMapping("/edit")
    public String update(Produce produce, RedirectAttributes redirectAttributes) {
        iProduceService.update(produce);
        redirectAttributes.addFlashAttribute("message", "Edit Success");
        return "redirect:/";
    }

    @PostMapping("/create")
    public String save(Produce produce, RedirectAttributes redirectAttributes) {
        iProduceService.save(produce);
        redirectAttributes.addFlashAttribute("message", "Create New Success");
        return "redirect:/";
    }

}
