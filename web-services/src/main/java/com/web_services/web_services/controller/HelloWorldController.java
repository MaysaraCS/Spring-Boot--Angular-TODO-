package com.web_services.web_services.controller;

import org.springframework.web.bind.annotation.*;


@RestController
public class HelloWorldController {
    //@RequestMapping(method = RequestMethod.GET, path = "/hello")
    @GetMapping(path = "/hello")
    public String helloWorld() {
        return "Hello World";
    }
    @GetMapping(path = "/hello-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World This is a bean");
    }
    @GetMapping(path = "/hello/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello %s", name));
    }

}
