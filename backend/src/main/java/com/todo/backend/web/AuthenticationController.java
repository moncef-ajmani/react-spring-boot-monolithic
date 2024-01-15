package com.todo.backend.web;

import com.todo.backend.DTOs.AuthenticationResponseDTO;
import com.todo.backend.DTOs.LoginRequestDTO;
import com.todo.backend.DTOs.RegisterRequestDTO;
import com.todo.backend.service.AuthenticationService;
import jdk.jfr.Frequency;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDTO> register(@RequestBody RegisterRequestDTO request){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDTO> register(@RequestBody LoginRequestDTO request){
        return ResponseEntity.ok(authenticationService.login(request));

    }

}
