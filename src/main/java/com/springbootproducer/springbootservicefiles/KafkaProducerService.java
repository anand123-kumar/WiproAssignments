package com.springbootproducer.springbootservicefiles;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.springbootproducer.springbootdtofiles.RideDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {
  @Value("${uber.topic.name}")
  private String topic;

  private final KafkaTemplate<String, String> kafkaTemplate;
  private final ObjectMapper mapper = new ObjectMapper();

  public KafkaProducerService(KafkaTemplate<String, String> kafkaTemplate) {
    this.kafkaTemplate = kafkaTemplate;
  }

  public void sendMessage(String operation, RideDto ride) {
    try {
      ObjectNode node = mapper.createObjectNode();
      node.put("operation", operation);
      if (ride.getId() != null) node.put("id", ride.getId());
      node.put("driverName", ride.getDriverName());
      node.put("passengerName", ride.getPassengerName());
      node.put("pickupLocation", ride.getPickupLocation());
      node.put("dropLocation", ride.getDropLocation());
      if (ride.getFare() != null) node.put("fare", ride.getFare());
      String payload = mapper.writeValueAsString(node);
      kafkaTemplate.send(topic, payload);
    } catch (Exception e) {
      throw new RuntimeException("Failed to send Kafka message", e);
    }
  }
}
