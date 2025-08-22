// Importing React library to use JSX and functional components
import React from "react";

// Defining a functional component named SweetsList
const SweetsList = () => {
  // Defining an array of sweet objects with id, name, and price
  const sweets = [
    { id: 1, name: "Mysore Pak", price: 30 },
    { id: 2, name: "Barfi", price: 20 },
    { id: 3, name: "Rasgulla", price: 40 },
    { id: 4, name: "Gulab Jamun", price: 100 },
  ];

  // Inline CSS style for the container div
  const containerStyle = {
    textAlign: "center",         // Centers content horizontally
    marginTop: "30px",           // Adds top margin of 30px
    fontFamily: "Arial, sans-serif", // Applies font style
  };

  // Inline CSS style for the heading
  const headingStyle = {
    fontSize: "24px",            // Heading text size
    fontWeight: "bold",          // Makes text bold
    marginBottom: "20px",        // Adds space below heading
  };

  // Inline CSS style for the list
  const listStyle = {
    listStyleType: "disc",       // Adds bullet points to list
    textAlign: "left",           // Aligns list items to the left
    display: "inline-block",     // Makes list behave like inline-block for alignment
    fontSize: "18px",            // List item font size
  };

  // Returning JSX to render the UI
  return (
    <div style={containerStyle}> {/* Parent container with styling */}
      <h2 style={headingStyle}>Sweets List:</h2> {/* Heading with styles */}
      <ul style={listStyle}> {/* Unordered list with applied styles */}
        {sweets.map((sweet) => ( // Iterating through sweets array
          <li key={sweet.id}> {/* Each sweet displayed as a list item, unique key required */}
            {sweet.name} - Price: ₹{sweet.price} {/* Showing sweet name and price */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the component so it can be imported and used in other files
export default SweetsList;
