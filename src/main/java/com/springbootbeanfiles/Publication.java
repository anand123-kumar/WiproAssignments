package com.springbootbeanfiles;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String location;

    // Constructors
    public Publication() {
    }

    public Publication(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Publication [id=" + id + ", name=" + name + ", location=" + location + "]";
    }

	public Object getBookid() {
		return null;
	}

	public Object getBookname() {
		return null;
	}

	public Object getAuthor() {
		return null;
	}

	public Object getPrice() {
		return null;
	}
}
