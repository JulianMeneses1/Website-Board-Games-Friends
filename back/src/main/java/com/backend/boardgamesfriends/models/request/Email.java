package com.backend.boardgamesfriends.models.request;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class Email {
    
    private String subject;
    private String message;

    public Email(String subject, String message) {        
        this.subject = subject;
        this.message = message;
    }
}