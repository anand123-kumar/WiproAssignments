import React, { useState } from "react";

// Electronics Component
const Electronics = () => {
  // useState hook to store and manage values
  const [name] = useState("Laptop"); // fixed name, no setter
  const [brand, setBrand] = useState("Lenovo"); // brand can be updated
  const [price, setPrice] = useState(10000); // price can be updated

  // Inline styling objects
  const containerStyle = {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const detailsStyle = {
    fontSize: "18px",
    margin: "8px 0",
  };

  const buttonContainer = {
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "0 10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h2 style={headingStyle}>🔌 Electronic Item Details</h2>

      {/* Display item details */}
      <p style={detailsStyle}>Name: {name}</p>
      <p style={detailsStyle}>Brand: {brand}</p>
      <p style={detailsStyle}>Price: ₹{price}</p>

      {/* Buttons to change state values */}
      <div style={buttonContainer}>
        {/* Change brand to HP */}
        <button
          style={{ ...buttonStyle, backgroundColor: "lightgray" }}
          onClick={() => setBrand("HP")}
        >
          Change Brand
        </button>

        {/* Increase price by 500 */}
        <button
          style={{ ...buttonStyle, backgroundColor: "dodgerblue", color: "white" }}
          onClick={() => setPrice(price + 500)}
        >
          Increase Price
        </button>
      </div>
    </div>
  );
};

export default Electronics;
