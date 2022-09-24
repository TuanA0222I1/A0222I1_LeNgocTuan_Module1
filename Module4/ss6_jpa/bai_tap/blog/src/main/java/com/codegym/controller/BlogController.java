package com.codegym.controller;

import com.codegym.dto.BlogDTO;
import com.codegym.models.Blog;
import com.codegym.service.IBlogService;
import com.codegym.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class BlogController {
    @Autowired
    IBlogService iBlogService;

    @Autowired
    ICategoryService categoryService;

    @GetMapping("/")
    public String goHome(@RequestParam(value = "name_search", defaultValue = "") String name_search, Model model) {
        model.addAttribute("list", iBlogService.findByName(name_search));
        return "/home";
    }

    @GetMapping("/create")
    public String createBlog(Model model) {
        model.addAttribute("blog", new BlogDTO());
        model.addAttribute("category", categoryService.findAll());
        model.addAttribute("link", "/create");
        return "/form";
    }

    @PostMapping("/create")
    public String create(@Valid @ModelAttribute("blog") BlogDTO blogDto, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
            model.addAttribute("category", categoryService.findAll());
            model.addAttribute("link", "/create");
            return "/form";
        }
        iBlogService.save(new Blog(blogDto));
        redirectAttributes.addFlashAttribute("message", "Create Success!!!");
        return "redirect:/";
    }

    @GetMapping("/edit/{id}")
    public String editBlog(@PathVariable Integer id, Model model) {
        model.addAttribute("blog", new BlogDTO(iBlogService.findById(id)));
        model.addAttribute("category", categoryService.findAll());
        model.addAttribute("link", "/edit");
        return "/form";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam("id") Integer id,RedirectAttributes redirectAttributes) {
        iBlogService.delete(id);
        redirectAttributes.addFlashAttribute("message", "Delete Success!!!");
        return "redirect:/";
    }

    @PostMapping("/edit")
    public String edit(@Valid @ModelAttribute("blog") BlogDTO blogDTO, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
            model.addAttribute("category", categoryService.findAll());
            model.addAttribute("link", "/edit");
            return "/form";
        }
        Blog blog = new Blog(blogDTO);
        blog.setId(blogDTO.getId());
        iBlogService.edit(blog);
        redirectAttributes.addFlashAttribute("message", "Edit Success!!!");
        return "redirect:/";
    }
}
