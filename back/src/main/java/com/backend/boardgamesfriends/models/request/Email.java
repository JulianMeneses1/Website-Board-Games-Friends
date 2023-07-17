package com.backend.boardgamesfriends.models.request;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class Email {
    
    private String affair;
    private String message;

    public Email(String affair, String message) {        
        this.affair = affair;
        this.message = message;
    }
}