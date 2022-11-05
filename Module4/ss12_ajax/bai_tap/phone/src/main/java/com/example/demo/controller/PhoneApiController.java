package com.example.demo.controller;

import com.example.demo.model.Smartphone;
import com.example.demo.service.IPhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PhoneApiController {
    @Autowired
    IPhoneService service;

    @GetMapping("")
    public ResponseEntity<List<Smartphone>> getList(@RequestParam(value = "searchModel",defaultValue = "") String searchModel) {
        if (service.findAll().isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
         return new ResponseEntity<>(service.findAllByModelContains(searchModel,"on"), HttpStatus.OK);

    }

    @PostMapping("")
    public ResponseEntity<List<Smartphone>> createPhone(@Valid @RequestBody Smartphone smartphone) {
        smartphone.setStatus("on");
        service.save(smartphone);
        return new ResponseEntity<>(service.findAll(), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<List<Smartphone>> updatePhone(@PathVariable Long id) {
        Smartphone phone = service.findById(id);
        phone.setStatus("off");
        service.save(phone);
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Smartphone> findById(@PathVariable Long id) {
        return new ResponseEntity<>(service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<List<Smartphone>> updatePhone(@Valid @RequestBody Smartphone smartphone) {
        smartphone.setStatus("on");
        service.save(smartphone);
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

}
