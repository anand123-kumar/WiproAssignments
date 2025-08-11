package com.springbootconsumer.springbootbeanfiles;

import jakarta.persistence.*;

@Entity
@Table(name = "rides")
public class Ride {
  @Id
  private Long id;

  @Column(name = "driver_name")
  private String driverName;

  @Column(name = "passenger_name")
  private String passengerName;

  @Column(name = "pickup_location")
  private String pickupLocation;

  @Column(name = "drop_location")
  private String dropLocation;

  @Column(name = "fare")
  private Double fare;

  public String getId() {
	return null;
  }

  public void setId(long asLong) {
	
  }

  public void setDriverName(String asText) {
	
  }

  public void setPassengerName(String asText) {
	
  }

  public void setPickupLocation(String asText) {
	
  }

  public void setDropLocation(String asText) {
	
  }

  public void setFare(double asDouble) {
	
  }

}
