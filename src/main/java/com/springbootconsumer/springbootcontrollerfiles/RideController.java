package com.springbootconsumer.springbootcontrollerfiles;

import com.springbootconsumer.springbootbeanfiles.Ride;
import com.springbootconsumer.springbootservicefiles.RideService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rides")
public class RideController {
  private final RideService service;
  public RideController(RideService service) { this.service = service; }

  @GetMapping
  public List<Ride> getAll() { return service.findAll(); }

  @GetMapping("/{id}")
  public ResponseEntity<Ride> getById(@PathVariable Long id) {
    return service.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
  }
}
