package com.backend.boardgamesfriends.controllers;

import com.backend.boardgamesfriends.models.request.Email;
import com.backend.boardgamesfriends.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    
    @Autowired
    EmailService servicioEmail;
    
    @PostMapping("/send-email")
    public void sendEmail (@RequestBody Email data) {
        this.servicioEmail.sendEmail("julian.meneses11@gmail.com",data);
    }
}
