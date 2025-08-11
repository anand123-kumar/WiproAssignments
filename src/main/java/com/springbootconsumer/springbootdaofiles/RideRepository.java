package com.springbootconsumer.springbootdaofiles;

import com.springbootconsumer.springbootbeanfiles.Ride;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RideRepository extends JpaRepository<Ride, Long> {}
