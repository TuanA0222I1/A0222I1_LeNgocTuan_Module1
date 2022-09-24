package controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ControllerSomething {
    @RequestMapping("/")
    public String goHome() {
        return "index";
    }

    @GetMapping("/create")
    public String helloSomething(@RequestParam String name_hello, Model model){
        model.addAttribute("message",name_hello);
        return "index";
    }
}
