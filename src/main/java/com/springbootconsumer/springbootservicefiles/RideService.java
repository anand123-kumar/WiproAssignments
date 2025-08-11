package com.springbootconsumer.springbootservicefiles;

import com.springbootconsumer.springbootbeanfiles.Ride;
import com.springbootconsumer.springbootdaofiles.RideRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RideService {
  private final RideRepository repo;
  public RideService(RideRepository repo) { this.repo = repo; }

  public List<Ride> findAll() { return repo.findAll(); }
  public Optional<Ride> findById(Long id) { return repo.findById(id); }
  public Ride save(Ride r) { return repo.save(r); }
  public void deleteById(Long id) { repo.deleteById(id); }
}
