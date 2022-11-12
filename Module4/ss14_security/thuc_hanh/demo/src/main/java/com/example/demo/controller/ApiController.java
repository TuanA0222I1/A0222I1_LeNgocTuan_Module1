package com.example.demo.controller;

import com.example.demo.model.Blog;
import com.example.demo.service.IBlogService;
import jdk.nashorn.internal.objects.annotations.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("/*")
public class ApiController {
    @Autowired
    IBlogService service;

    @GetMapping("")
    public ResponseEntity<List<Blog>> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Blog> save(@Valid @RequestBody Blog blog){
        service.save(blog);
        return new ResponseEntity<>(blog,HttpStatus.CREATED);

    }
}
