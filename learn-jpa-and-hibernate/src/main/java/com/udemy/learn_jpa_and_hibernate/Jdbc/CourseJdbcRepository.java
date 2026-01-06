package com.udemy.learn_jpa_and_hibernate.Jdbc;

import com.udemy.learn_jpa_and_hibernate.Model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


// in this file we will use JdbcTemplate from spring JDBC
@Repository
public class CourseJdbcRepository {

    @Autowired
    private JdbcTemplate springJdbcTemplate;

    private static String INSERT_QUERY =
            """
                    insert into course (id, name, author)
                    values (?, ?, ?);
            """;

    private static String DELETE_QUERY =
            """
                    delete from course where id = ?;
            """;
    private static String SELECT_QUERY =
            """
                    select * from course where id = ?;
            """;
    public void insert(Course course){
        springJdbcTemplate.update(INSERT_QUERY,
                course.getId(),
                course.getName(),
                course.getAuthor());
    }
    public void deleteById(Long id){
        springJdbcTemplate.update(DELETE_QUERY,id);
    }
    public Course findById(Long id){
        // result set to a bean mapping to row mappers
        // Result Set -> Bean -> Row Mapper
        return springJdbcTemplate.queryForObject(SELECT_QUERY,
                new BeanPropertyRowMapper<>(Course.class),id);
    }
}
