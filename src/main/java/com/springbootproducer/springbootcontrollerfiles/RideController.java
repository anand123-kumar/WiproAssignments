package com.springbootproducer.springbootcontrollerfiles;

import com.springbootproducer.springbootdtofiles.RideDto;
import com.springbootproducer.springbootservicefiles.KafkaProducerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rides")
public class RideController {
  private final KafkaProducerService producer;

  public RideController(KafkaProducerService producer) {
    this.producer = producer;
  }

  @PostMapping
  public ResponseEntity<String> createRide(@RequestBody RideDto ride) {
    producer.sendMessage("CREATE", ride);
    return ResponseEntity.ok("CREATE message sent to Kafka");
  }

  @PutMapping("/{id}")
  public ResponseEntity<String> updateRide(@PathVariable Long id, @RequestBody RideDto ride) {
    ride.setId(id);
    producer.sendMessage("UPDATE", ride);
    return ResponseEntity.ok("UPDATE message sent to Kafka");
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteRide(@PathVariable Long id) {
    RideDto dto = new RideDto();
    dto.setId(id);
    producer.sendMessage("DELETE", dto);
    return ResponseEntity.ok("DELETE message sent to Kafka");
  }
}
