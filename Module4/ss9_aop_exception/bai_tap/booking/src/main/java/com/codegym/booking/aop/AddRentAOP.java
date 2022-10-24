package com.codegym.booking.aop;

import com.codegym.booking.models.Book;
import com.codegym.booking.models.Rent;
import com.codegym.booking.service.IRentService;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Aspect
@Configuration
public class AddRentAOP {
    @Autowired
    IRentService rentService;

    Logger logger = LoggerFactory.getLogger(AddRentAOP.class);

    String fileLibrary = "src\\main\\resources\\static\\LogLibrary.txt";
    String filePeople = "src\\main\\resources\\static\\LogPeople.txt";

    @AfterReturning("execution(* com.codegym.booking.controller.BookController.rentBook(..)) && args (id,..)")
    public void insertRentList(JoinPoint point, Integer id) {
        rentService.save(new Rent(getRandom(), new Book(id), "on"));
        logger.info("Time Taken by {} is {}", point, LocalDateTime.now());
        String text = String.format("Rent id Book %d where time is %s", id, LocalDateTime.now());
        writeLog(fileLibrary, text);
    }

    @AfterReturning("execution(* com.codegym.booking.controller.BookController.returnBook(..)) && args (idReturn,..)")
    public void returnRentList(JoinPoint point, Integer idReturn) {
        logger.info("Time Taken by {} is {}", point, LocalDateTime.now());
        String text = String.format("Return id rent book %d where time is %s", idReturn, LocalDateTime.now());
        writeLog(fileLibrary, text);
    }

    @AfterReturning("execution(* com.codegym.booking.controller.*.*(..))")
    public void returnRentList(JoinPoint point) {
        logger.info("Time Taken by {} is {}", point, LocalDateTime.now());
        String text = String.format("Time Taken by %s where time is %s", point, LocalDateTime.now());
        writeLog(filePeople, text);
    }

    private int getRandom() {
        return (int) ((Math.random() * (99999 - 10000 + 1)) + 10000);
    }

    public void writeLog(String link, String text) {
        try (BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(link, true))) {
            bufferedWriter.write(text);
            bufferedWriter.newLine();
        } catch (IOException e) {
            System.out.println("File NOT FOUND");
        }
    }
}
