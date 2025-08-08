package com.springbootcontrollerfiles;

import com.springbootbeanfiles.Client;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/springrest")
public class ClientRestController {

    @GetMapping("/clients")
    public List<Client> getClients() {
        List<Client> clients = new ArrayList<>();

        clients.add(new Client(101, "John", "Doe", "djohn@gmail.com", "121-232-3435", new Date(1467240235069L)));
        clients.add(new Client(201, "Russ", "Smith", "sruss@gmail.com", "343-545-2345", new Date(1467240235069L)));
        clients.add(new Client(301, "Kate", "Williams", "kwilliams@gmail.com", "876-237-2987", new Date(1467240235069L)));

        return clients;
    }
}
