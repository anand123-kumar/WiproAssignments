// FurnitureComponents.jsx
// This file contains all furniture components + main Furniture component

import React, { useState } from "react";

// ------------------- Chair Component -------------------
const Chair = () => {
  return (
    <div>
      <h3>🪑 Chair</h3>
      <p><b>Name:</b> Office Chair</p>
      <p><b>Price:</b> ₹2500</p>
      <p><b>Material:</b> Plastic</p>
      <p><b>Brand:</b> Nilkamal</p>
    </div>
  );
};

// ------------------- Table Component -------------------
const Table = () => {
  return (
    <div>
      <h3>🛋️ Table</h3>
      <p><b>Name:</b> Dining Table</p>
      <p><b>Price:</b> ₹12000</p>
      <p><b>Material:</b> Wood</p>
      <p><b>Brand:</b> Godrej Interio</p>
    </div>
  );
};

// ------------------- Sofa Component -------------------
const Sofa = () => {
  return (
    <div>
      <h3>🛋️ Sofa</h3>
      <p><b>Name:</b> 3-Seater Sofa</p>
      <p><b>Price:</b> ₹15000</p>
      <p><b>Material:</b> Leather</p>
      <p><b>Brand:</b> Urban Ladder</p>
    </div>
  );
};

// ------------------- Bed Component -------------------
const Bed = () => {
  return (
    <div>
      <h3>🛏️ Bed</h3>
      <p><b>Name:</b> King Size Bed</p>
      <p><b>Price:</b> ₹25000</p>
      <p><b>Material:</b> Teak Wood</p>
      <p><b>Brand:</b> Durian</p>
    </div>
  );
};

// ------------------- Main Furniture Component -------------------
const Furniture = () => {
  // State to store selected furniture type
  const [selectedFurniture, setSelectedFurniture] = useState("chair");

  // Function to render the correct component using switch–case
  const renderFurniture = () => {
    switch (selectedFurniture) {
      case "chair":
        return <Chair />;
      case "table":
        return <Table />;
      case "sofa":
        return <Sofa />;
      case "bed":
        return <Bed />;
      default:
        return <p>Please select a furniture item</p>;
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>🏠 Furniture Store</h1>

      {/* Dropdown to select furniture type */}
      <select
        value={selectedFurniture}
        onChange={(e) => setSelectedFurniture(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      >
        <option value="chair">Chair</option>
        <option value="table">Table</option>
        <option value="sofa">Sofa</option>
        <option value="bed">Bed</option>
      </select>

      {/* Render selected furniture details */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          width: "300px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {renderFurniture()}
      </div>
    </div>
  );
};

// Export main Furniture component
export default Furniture;
