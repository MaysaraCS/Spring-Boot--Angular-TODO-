package com.udemy.learn_jpa_and_hibernate.Repository;

import com.udemy.learn_jpa_and_hibernate.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseSpringDataJpaRepository extends JpaRepository<Course, Long> {
    List<Course> findByAuthor(String author);

    List<Course> findByName(String name);
    
}
