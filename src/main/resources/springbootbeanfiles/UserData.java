package com.springbootbeanfiles;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "{userdata.name.required}")
    private String name;

    @Email(message = "{userdata.email.valid}")
    @NotEmpty(message = "{userdata.email.required}")
    private String email;

    @NotEmpty(message = "{userdata.phone.required}")
    private String phone;

    @NotEmpty(message = "{userdata.address.required}")
    private String address;

    
}
