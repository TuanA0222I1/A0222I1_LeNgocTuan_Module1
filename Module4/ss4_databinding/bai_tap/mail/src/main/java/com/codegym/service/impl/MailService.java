package com.codegym.service.impl;

import com.codegym.models.Mail;
import com.codegym.repository.IBaseRepository;
import com.codegym.repository.impl.MailRepository;
import com.codegym.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailService implements IBaseService<Mail> {
    @Autowired
    IBaseRepository<Mail> repository = new MailRepository();

    @Override
    public List<Mail> findAll() {
        return repository.findAll();
    }

    @Override
    public List<String> findAllPage() {
        return repository.findAllPage();
    }

    @Override
    public List<String> findAllLanguages() {
        return repository.findAllLanguages();
    }

    @Override
    public void save(Mail mail) {
        repository.save(mail);
    }
}
