
import React, { useState, useEffect } from "react";

const RestaurantForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    contact: "",
    address: "",
    cuisineType: "",
    openingHours: ""
  });

  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Q1: useEffect - Run on every render (No dependency array)
  useEffect(() => {
    console.log("Restaurant Form Rendered");
  });

  // Q2: useEffect - Run only once when component mounts ([] dependency)
  useEffect(() => {
    console.log("Welcome to Restaurant Registration App 🏢");
    alert("Welcome to Restaurant Registration App 🏢");
  }, []);

  // Q3: useEffect - Run whenever form data changes
  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  // Q4: useEffect - Auto-save form data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Auto-saving form data:", formData);
      // You could also save to localStorage or send to backend here
    }, 5000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [formData]);

  // Handle input change dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Save form data for display
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Form Title */}
      <h1>🍴 Restaurant Registration Form</h1>
      <p>Welcome to Restaurant Registration 🏢</p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label>Restaurant Name</label>
        <br />
        <input
          type="text"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleChange}
        />
        <br />

        <label>Owner Name</label>
        <br />
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
        />
        <br />

        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label>Contact Number</label>
        <br />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <br />

        <label>Address</label>
        <br />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />

        <label>Cuisine Type</label>
        <br />
        <input
          type="text"
          name="cuisineType"
          value={formData.cuisineType}
          onChange={handleChange}
        />
        <br />

        <label>Opening Hours</label>
        <br />
        <input
          type="text"
          name="openingHours"
          value={formData.openingHours}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data as JSON */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>📂 Submitted Data (JSON)</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RestaurantForm;
