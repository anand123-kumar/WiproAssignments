// Import React library for creating components
import React from "react";

// Functional component Juice that accepts props: id, name, price
function Juice({ id, name, price }) {
  return (
    // A table row (<tr>) for displaying juice details
    <tr>
      {/* First column showing Juice ID with border & padding */}
      <td style={{ border: "1px solid black", padding: "8px" }}>{id}</td>

      {/* Second column showing Juice Name */}
      <td style={{ border: "1px solid black", padding: "8px" }}>{name}</td>

      {/* Third column showing Juice Price */}
      <td style={{ border: "1px solid black", padding: "8px" }}>{price}</td>
    </tr>
  );
}

// Functional component JuiceList that contains a list of juices
function JuiceList() {
  // Array of juice objects with id, name, and price
  const juices = [
    { id: 1, name: "Apple Juice", price: "₹50" },
    { id: 2, name: "Orange Juice", price: "₹60" },
    { id: 3, name: "Mango Juice", price: "₹70" },
  ];

  return (
    // Main container div
    <div>
      {/* Heading for the Juice List */}
      <h2>Juice List</h2>

      {/* Table to display juice data, styled with border collapse */}
      <table style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead>
          {/* Table header row */}
          <tr>
            {/* Column header for ID */}
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            {/* Column header for Name */}
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            {/* Column header for Price */}
            <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through juices array and render Juice component for each item */}
          {juices.map((juice) => (
            // Passing props id, name, price to Juice component
            <Juice 
              key={juice.id} 
              id={juice.id} 
              name={juice.name} 
              price={juice.price} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export JuiceList as the default component so it can be imported in other files
export default JuiceList;
