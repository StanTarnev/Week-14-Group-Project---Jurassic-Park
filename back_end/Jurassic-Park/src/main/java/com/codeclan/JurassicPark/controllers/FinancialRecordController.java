package com.codeclan.JurassicPark.controllers;
import com.codeclan.JurassicPark.Repositories.FinancialRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/financialRecords")
public class FinancialRecordController {

    @Autowired
    FinancialRecordRepository financialRecordRepository;
}
