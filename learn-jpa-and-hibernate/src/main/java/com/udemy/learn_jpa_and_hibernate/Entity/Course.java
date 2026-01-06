package com.udemy.learn_jpa_and_hibernate.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

// add entity annotation to be able to connect to database -JPA
@Entity
// if u do not have the course table in the database do this
//@Entity(name = "course")
public class Course {

    @Id
    private Long id;

    //@Column(name = "name")
    private String name;

    //@Column(name = "author")
    private String author;

    // no arguments constructor
    public Course() {
    }

    // constructor

    public Course(Long id, String name, String author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }

    // getters

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    // to string

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
    // setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
