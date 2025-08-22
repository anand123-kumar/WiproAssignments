import React, { useEffect, useState } from "react";  // Import React, useEffect for lifecycle, useState for state mgmt
import axios from "axios";  // Import axios for API calls
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styling

const TailoringInventory = () => {
  const [items, setItems] = useState([]);   // State to hold tailoring items
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch data from JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:5000/tailoringItems") // API call to JSON server
      .then((response) => {
        setItems(response.data);  // Store data in state
        setLoading(false);        // Stop loading
      })
      .catch((err) => {
        setError("Failed to fetch data!"); // Handle error
        setLoading(false);                 // Stop loading
      });
  }, []); // Empty dependency array → runs only once

  if (loading) {
    return <p className="text-center mt-3">Loading tailoring inventory...</p>;
  }

  if (error) {
    return <p className="text-danger text-center mt-3">{error}</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Tailoring Shop Inventory</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Size</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.size}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TailoringInventory;
