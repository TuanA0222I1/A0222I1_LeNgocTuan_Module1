package com.codegym.controller;

import com.codegym.models.Music;
import com.codegym.models.MusicDTO;
import com.codegym.models.TypeMusic;
import com.codegym.service.IBaseService;
import com.codegym.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    IBaseService<Music> musicIBaseService;

    @Autowired
    ITypeService<TypeMusic> typeService;

    @RequestMapping("/")
    public String goIndex(Model model) {
        model.addAttribute("listMusic", musicIBaseService.findAll());
        model.addAttribute("listType", typeService.findAll());
        return "/index";
    }

    @RequestMapping("/create")
    public String createForm(Model model) {
        model.addAttribute("musicDTO", new MusicDTO());
        model.addAttribute("listType", typeService.findAll());
        return "/create";
    }

    @PostMapping("/save")
    public String create(@ModelAttribute("musicDTO") MusicDTO musicDTO) {
        musicIBaseService.addMusic(new Music(musicDTO));
        return "redirect:/";
    }

    @PostMapping("/delete")
    public String deleteById(@RequestParam int id) {
        musicIBaseService.delete(id);
        return "redirect:/";
    }

    @GetMapping("/edit/{id}")
    public String editForm(@PathVariable Integer id, Model model) {
        model.addAttribute("id", id);
        model.addAttribute("music", new MusicDTO(musicIBaseService.findById(id)));
        model.addAttribute("listType", typeService.findAll());
        return "/edit";
    }

    @PostMapping("/edit")
    public String edit(@ModelAttribute("music") MusicDTO musicDTO) {
        Music music = new Music(musicDTO);
        music.setId(musicDTO.getId());
        musicIBaseService.edit(music);
        return "redirect:/";
    }

    @GetMapping("/search")
    public String findByName(@RequestParam String name, Model model) {
        model.addAttribute("listMusic", musicIBaseService.findByName(name));
        model.addAttribute("listType", typeService.findAll());
        return "/index";
    }

    @GetMapping("/detail/{id}")
    public String detailSong(@PathVariable int id,Model model){
        model.addAttribute("music",musicIBaseService.findById(id));
        model.addAttribute("listType", typeService.findAll());
        return "/detail";
    }
}
