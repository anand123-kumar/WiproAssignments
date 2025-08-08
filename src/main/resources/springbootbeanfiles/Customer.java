package com.springbootbeanfiles;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.Date;

public class Customer {

    @Size(min = 2, max = 30, message = "{name.invalid}")
    private String name;

    @NotBlank(message = "{email.required}")
    @Email
    private String email;

    @Min(value = 0, message = "{age.required}")
    private int age;

    @NotBlank(message = "{gender.required}")
    private String gender;

    @NotNull(message = "{birthday.required}")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    @Pattern(regexp = "^(\\d{3}[-]?){2}\\d{4}( x\\d{1,5})?$", message = "{phone.invalid}")
    private String phone;

    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public Date getBirthday() { return birthday; }
    public void setBirthday(Date birthday) { this.birthday = birthday; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}
