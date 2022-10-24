package com.codegym.blog_sort_page.controller;

import com.codegym.blog_sort_page.models.Blog;
import com.codegym.blog_sort_page.models.BlogDTO;
import com.codegym.blog_sort_page.service.IBlogService;
import com.codegym.blog_sort_page.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.Optional;

@Controller
public class BlogController {
    final int MAX_DISPLAY = 4;

    @Autowired
    ICategoryService categoryService;

    @Autowired
    IBlogService blogService;

    @GetMapping("")
    public String goList(@RequestParam(value = "name_search", defaultValue = "") String name_search,
                         @PageableDefault(size = MAX_DISPLAY, sort = "name", direction = Sort.Direction.ASC) Pageable pageable,
                         Model model) {
        model.addAttribute("list", blogService.findAllByName(name_search, pageable));
        return "list";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam("id") Integer id, RedirectAttributes attributes) {
        blogService.deleteById(id);
        attributes.addFlashAttribute("message", "delete success");
        return "redirect:/";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {
        Optional<Blog> blog = blogService.findById(id);
        if (blog.isPresent()) {
            model.addAttribute("blog", new BlogDTO(blog.get()));
            model.addAttribute("typeList", categoryService.findAll());
            return "form";
        }
        return "redirect:/";
    }

    @PostMapping("/update")
    public String update(@Valid @ModelAttribute("blog") BlogDTO blogDTO, BindingResult result,
                         RedirectAttributes attributes, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("typeList", categoryService.findAll());
            return "form";
        }

        Blog blog = new Blog(blogDTO);
        blog.setId(blogDTO.getId());
        blogService.save(blog);
        attributes.addFlashAttribute("message", "update success");
        return "redirect:/";
    }
}
