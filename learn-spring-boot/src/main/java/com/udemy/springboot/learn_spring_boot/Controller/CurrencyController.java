package com.udemy.springboot.learn_spring_boot.Controller;


import com.udemy.springboot.learn_spring_boot.Configs.CurrencyServiceConfiguration;
import com.udemy.springboot.learn_spring_boot.Model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CurrencyController {

    @Autowired
    private CurrencyServiceConfiguration configuration;
    @RequestMapping("/currency-configuration")
    public CurrencyServiceConfiguration retriveAllCourses(){
        return configuration;
    }
}
