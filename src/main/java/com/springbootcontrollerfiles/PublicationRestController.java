package com.springbootcontrollerfiles;

import com.springbootbeanfiles.Publication;
import com.springbootdaofiles.PublicationDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restjdbcpub")
public class PublicationRestController {

    @Autowired
    private PublicationDAO dao;

    @PostMapping("/publication")
    public String insert(@RequestBody Publication pub) {
        dao.insertPublication(pub);
        return "Publication inserted!";
    }

    @GetMapping("/publications")
    public List<Publication> getAll() {
        return dao.getAllPublications();
    }

    @GetMapping("/publication/{id}")
    public Publication getById(@PathVariable int id) {
        return dao.getPublicationById(id);
    }

    @PutMapping("/publication")
    public String update(@RequestBody Publication pub) {
        dao.updatePublication(pub);
        return "Publication updated!";
    }

    @DeleteMapping("/publication/{id}")
    public String delete(@PathVariable int id) {
        dao.deletePublication(id);
        return "Publication deleted!";
    }
}
