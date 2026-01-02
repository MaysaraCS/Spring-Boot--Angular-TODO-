package com.web_services.web_services.service;

import com.web_services.web_services.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;
    static {
        todos.add(new Todo((long)++idCounter, "maysara", "learn backend", new Date(), false));
        todos.add(new Todo((long)++idCounter, "maysara", "learn frontend", new Date(), false));
        todos.add(new Todo((long)++idCounter, "maysara", "learn database", new Date(), false));
    }
    public List<Todo> findAll(){
        return todos;
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId((long)++idCounter);
            todos.add(todo);
        }else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo == null) return null;
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }
    public Todo findById(long id){
        for(Todo todo : todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}
