package com.example.demo.controller;

import com.example.demo.DAO.ProduceDAO;
import com.example.demo.model.Produce;
import com.example.demo.service.IProduceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
@SessionAttributes("cart")
public class ProduceController {
    @Autowired
    IProduceService service;

    @ModelAttribute("cart")
    public Map<Long, ProduceDAO> DAOmap() {
        return new HashMap<>();
    }

    @GetMapping("")
    public String goHomeListProduce(Model model) {
        model.addAttribute("list", service.findAll());
        return "home";
    }

    @GetMapping("/add/{id}")
    public String addCart(@PathVariable Long id, @ModelAttribute("cart") Map<Long, ProduceDAO> DAOmap, RedirectAttributes attributes) {
        ProduceDAO produceDAO = new ProduceDAO(service.findById(id));

        if (DAOmap.containsKey(produceDAO.getId())) {
            DAOmap.get(id).setQuantity(DAOmap.get(id).getQuantity() + 1);
        } else {
            DAOmap.put(id, produceDAO);
        }

        attributes.addFlashAttribute("message", "Add Cart Success!!!");
        return "redirect:/";
    }

    @GetMapping("/cart")
    public String getCart(@ModelAttribute("cart") Map<Long, ProduceDAO> DAOmap, Model model) {
        model.addAttribute("list", new ArrayList<>(DAOmap.values()));
        model.addAttribute("total", totalMoney(DAOmap));
        return "cart";
    }

    private double totalMoney(@ModelAttribute("cart") Map<Long, ProduceDAO> DAOmap) {
        return new ArrayList<>(DAOmap.values()).stream().mapToInt(x -> (int) (x.getPrice() * x.getQuantity())).sum();
    }
}
