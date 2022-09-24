package com.codegym.repository.impl;

import com.codegym.models.Mail;
import com.codegym.repository.IBaseRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MailRepository implements IBaseRepository<Mail> {
    static List<Mail> mailList = new ArrayList<>();
    static List<String> languagesList = new ArrayList<>();
    static List<String> pageSize = new ArrayList<>();

    static {
        languagesList.add("English");
        languagesList.add("Japanese");
        languagesList.add("Vietnamese");
        languagesList.add("Chinese");
        pageSize.add("25");
        pageSize.add("50");
        pageSize.add("75");
        pageSize.add("85");
    }

    @Override
    public List<Mail> findAll() {
        return mailList;
    }

    @Override
    public List<String> findAllPage() {
        return pageSize;
    }

    @Override
    public List<String> findAllLanguages() {
        return languagesList;
    }

    @Override
    public void save(Mail mail) {
        mailList.add(mail);
    }
}
