package com.web_services.web_services.HelloWorld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
    //@RequestMapping(method = RequestMethod.GET, path = "/hello")
    @GetMapping(path = "/hello")
    public String helloWorld() {
        return "Hello World";
    }
    @GetMapping(path = "/hello-bean")
    public HelloWorldBean helloWorldBean() {
//        throw new RuntimeException("This is a runtime exception error for checking");
        return new HelloWorldBean("Hello This is my message check");
    }
    @GetMapping(path = "/hello/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello %s", name));
    }

}
