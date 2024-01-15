package com.todo.backend.service;

import com.todo.backend.DTOs.AuthenticationResponseDTO;
import com.todo.backend.DTOs.LoginRequestDTO;
import com.todo.backend.DTOs.RegisterRequestDTO;
import com.todo.backend.entity.User;
import com.todo.backend.enums.Role;
import com.todo.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponseDTO register(RegisterRequestDTO request){
        var user = User
                .builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponseDTO login(LoginRequestDTO request){

        //authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (AuthenticationException e) {
            // Handle authentication failure, e.g., log the error or throw a custom exception
            throw new RuntimeException("Authentication failed: " + e.getMessage());
        }

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        System.out.println(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build();
    }

}
