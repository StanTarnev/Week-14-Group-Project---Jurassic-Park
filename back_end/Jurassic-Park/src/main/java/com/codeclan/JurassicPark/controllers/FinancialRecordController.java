package com.codeclan.JurassicPark.controllers;

import com.codeclan.JurassicPark.Repositories.ParkRepository;
import com.codeclan.JurassicPark.Repositories.VisitorRepository;
import com.codeclan.JurassicPark.models.FinancialRecord;
import com.codeclan.JurassicPark.models.Park;
import com.codeclan.JurassicPark.models.Visitor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/financialRecords")
public class FinancialRecordController {

    @Autowired
    VisitorRepository visitorRepository;
    @Autowired
    ParkRepository parkRepository;
    @GetMapping
    public FinancialRecord  getfinancialRecordsOfPark(){
        List<Visitor> visitors = visitorRepository.findAll();
        Date currentDate = new Date();
        String dateShort = DateFormat.getDateInstance(DateFormat.SHORT).format(currentDate);

        FinancialRecord financialRecord = new FinancialRecord( dateShort ,0,visitors );
        return financialRecord;
}

}
