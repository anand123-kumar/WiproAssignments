package com.springbootconsumer.springbootkafka;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springbootconsumer.springbootbeanfiles.Ride;
import com.springbootconsumer.springbootservicefiles.RideService;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {
  private final ObjectMapper mapper = new ObjectMapper();
  private final RideService rideService;

  public KafkaConsumerService(RideService rideService) {
    this.rideService = rideService;
  }

  @KafkaListener(topics = "${uber.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
  public void consume(String message) {
    try {
      JsonNode node = mapper.readTree(message);
      String op = node.has("operation") ? node.get("operation").asText() : null;
      Long id = node.has("id") && !node.get("id").isNull() ? node.get("id").asLong() : null;

      if ("CREATE".equalsIgnoreCase(op)) {
        Ride ride = toRide(node);
        rideService.save(ride);
        System.out.println("Created ride: " + ride.getId());
      } else if ("UPDATE".equalsIgnoreCase(op)) {
        if (id != null && rideService.findById(id).isPresent()) {
          Ride r = toRide(node);
          rideService.save(r); 
          System.out.println("Updated ride: " + id);
        } else {
         
          Ride r = toRide(node);
          rideService.save(r);
          System.out.println("Updated (created) ride: " + r.getId());
        }
      } else if ("DELETE".equalsIgnoreCase(op)) {
        if (id != null) {
          rideService.deleteById(id);
          System.out.println("Deleted ride: " + id);
        }
      } else {
        System.out.println("Unknown operation: " + op);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  private Ride toRide(JsonNode node) {
    Ride r = new Ride();
    if (node.has("id") && !node.get("id").isNull()) r.setId(node.get("id").asLong());
    if (node.has("driverName")) r.setDriverName(node.get("driverName").asText());
    if (node.has("passengerName")) r.setPassengerName(node.get("passengerName").asText());
    if (node.has("pickupLocation")) r.setPickupLocation(node.get("pickupLocation").asText());
    if (node.has("dropLocation")) r.setDropLocation(node.get("dropLocation").asText());
    if (node.has("fare") && !node.get("fare").isNull()) r.setFare(node.get("fare").asDouble());
    return r;
  }
}
