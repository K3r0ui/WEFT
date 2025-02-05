package com.weft.uttop.fr.weft.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SimpleApiController {

    @GetMapping("/hello")
    public ResponseEntity<String> PublicAPI() {
        return ResponseEntity.ok("Hello");
    }

    @GetMapping("/admin")
    public ResponseEntity<String> SecuredAPI() {
        return ResponseEntity.ok("Hello Admin");
    }

    @GetMapping("/user")
    public ResponseEntity<String> SecuredAPIuser() {
        return ResponseEntity.ok("Hello User WEFT REASEARCHER");
    }
}