package com.udemy.learn_jpa_and_hibernate.Jdbc;

import com.udemy.learn_jpa_and_hibernate.Model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner {

    @Autowired
    private CourseJdbcRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.insert(new Course(1L, "learn angular", "maysara mohamed"));
        repository.insert(new Course(2L, "learn spring boot", "maysara mohamed"));
        repository.insert(new Course(3L, "learn java", "maysara mohamed"));
        repository.insert(new Course(4L, "learn javascript", "maysara mohamed"));

        repository.deleteById(2L);
        System.out.println(repository.findById(1L));
        System.out.println(repository.findById(4L));

    }
}
