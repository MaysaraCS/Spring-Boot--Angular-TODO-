package com.udemy.learn_oauth.Controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldResource {

    @GetMapping("/")
    public String helloWorld(Authentication authentication) {
        System.out.println(authentication);
        System.out.println(authentication.getPrincipal());

        // Cast to OAuth2User to access user attributes
        if (authentication.getPrincipal() instanceof OAuth2User) {
            OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();

            // Print email and profile information
            System.out.println("Email: " + oauth2User.getAttribute("email"));
            System.out.println("Name: " + oauth2User.getAttribute("name"));
            System.out.println("Picture: " + oauth2User.getAttribute("picture"));

            return "Hello " + oauth2User.getAttribute("name") + "!";
        }

        return "Hello World";
    }

    @GetMapping("/user")
    public OAuth2User getUserInfo(Authentication authentication) {
        // Return full user information as JSON
        return (OAuth2User) authentication.getPrincipal();
    }
}