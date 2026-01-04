package com.udemy.springboot.learn_spring_boot.Controller;


import com.udemy.springboot.learn_spring_boot.Model.Course;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController {

    @RequestMapping("/courses")
    public List<Course>retriveAllCourses(){
        return Arrays.asList(
                new Course(1, "learn aws", "maysara"),
                new Course(2, "learn devops", "ahmed"),
                new Course(3, "learn spring boot", "mohamed"),
                new Course(4, "learn c++", "ayman"),
                new Course(5, "learn angular", "omar")
        );
    }
}
