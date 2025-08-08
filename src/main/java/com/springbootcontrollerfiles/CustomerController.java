package com.springbootcontrollerfiles;

import com.springbootbeanfiles.Customer;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/cust")
public class CustomerController {

    @GetMapping("/save.do")
    public String showForm(Model model) {
        model.addAttribute("customer", new Customer());
        return "customerform";
    }

    @PostMapping("/save.do")
    public String saveCustomer(@Valid @ModelAttribute("customer") Customer customer,
                               BindingResult result) {
        if (result.hasErrors()) {
            return "customerform";
        }
        return "success";
    }
}
