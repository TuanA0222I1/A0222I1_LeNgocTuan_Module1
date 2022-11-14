package com.example.demo.controller;

import com.example.demo.dto.BlogDTO;
import com.example.demo.model.Blog;
import com.example.demo.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("/*")
public class BlogApiController {
    @Autowired
    IBlogService blogService;

    @GetMapping("")
    public ResponseEntity<List<Blog>> getList() {
        return new ResponseEntity<>(blogService.findAll(), HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<Blog> editData(@Valid @RequestBody BlogDTO blogDTO) {
        Blog blog = new Blog(blogDTO);
        blog.setId(blogDTO.getId());
        return new ResponseEntity<>(blogService.save(blog), HttpStatus.NO_CONTENT);
    }

    @PostMapping("")
    public ResponseEntity<Blog> saveNewData(@Valid @RequestBody BlogDTO blogDTO) {
        return new ResponseEntity<>(blogService.save(new Blog(blogDTO)), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Blog>> deleteData(@PathVariable Long id) {
        blogService.removeById(id);
        return new ResponseEntity<>(blogService.findAll(), HttpStatus.NO_CONTENT);
    }
}
