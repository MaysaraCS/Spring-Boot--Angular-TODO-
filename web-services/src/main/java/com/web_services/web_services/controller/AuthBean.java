package com.web_services.web_services.controller;

public class AuthBean {

    private String messege;
    public AuthBean(String messege){
        this.messege = messege;
    }

    public String getMessege() {
        return messege;
    }

    public void setMessege(String messege) {
        this.messege = messege;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "messege='" + messege + '\'' +
                '}';
    }
}
