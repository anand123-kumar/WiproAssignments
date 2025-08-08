package com.springbootcontrollerfiles;

import com.springbootbeanfiles.UserData;
import com.springbootdaofiles.UserDataRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserDataController {

    @Autowired
    private UserDataRepository userDataRepo;

    @GetMapping("/")
    public String viewHomePage(Model model) {
        model.addAttribute("listUsers", userDataRepo.findAll());
        return "list_users"; 
    }

    @GetMapping("/showNewUserForm")
    public String showNewUserForm(Model model) {
        model.addAttribute("userData", new UserData());
        return "user_form"; 
    }

    @PostMapping("/saveUser")
    public String saveUser(@Valid @ModelAttribute("userData") UserData userData, BindingResult result) {
        if (result.hasErrors()) {
            return "user_form";
        }
        userDataRepo.save(userData);
        return "redirect:/";
    }

    @GetMapping("/updateUser/{id}")
    public String showUpdateForm(@PathVariable("id") long id, Model model) {
        UserData userData = userDataRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid ID: " + id));
        model.addAttribute("userData", userData);
        return "user_form";
    }

    @GetMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable("id") long id) {
        userDataRepo.deleteById(id);
        return "redirect:/";
    }
}
