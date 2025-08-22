// Import React and useState hook from React library
import React, { useState } from "react";

// Define a functional component named Phone
const Phone = () => {
  // Declare a state variable 'price' with initial value 50000 and a function 'setPrice' to update it
  const [price, setPrice] = useState(50000);

  // Inline CSS for the container div
  const containerStyle = {
    textAlign: "center",       // Align content in the center
    marginTop: "30px",         // Add top margin
    fontFamily: "Arial, sans-serif", // Set font family
  };

  // Inline CSS for the heading
  const headingStyle = {
    fontSize: "22px",          // Set font size for heading
    fontWeight: "bold",        // Make text bold
    marginBottom: "20px",      // Add bottom margin
  };

  // Inline CSS for the phone details (brand, model, price)
  const detailsStyle = {
    fontSize: "18px",          // Set font size
    margin: "8px 0",           // Add vertical spacing
  };

  // Inline CSS for the button
  const buttonStyle = {
    marginTop: "20px",         // Add spacing above button
    padding: "12px 25px",      // Add padding inside button
    fontSize: "16px",          // Button text size
    backgroundColor: "dodgerblue", // Button background color
    color: "white",            // Button text color
    border: "none",            // Remove border
    borderRadius: "8px",       // Rounded corners
    cursor: "pointer",         // Pointer cursor on hover
  };

  // JSX (UI part) returned by the component
  return (
    <div style={containerStyle}> {/* Main container with styles */}
      <h2 style={headingStyle}>📱 Phone Details</h2> {/* Heading */}
      <p style={detailsStyle}>Brand: Apple</p>       {/* Phone brand */}
      <p style={detailsStyle}>Model: iPhone 15</p>   {/* Phone model */}
      <p style={detailsStyle}>Price: ₹{price}</p>    {/* Dynamic price using state */}

      {/* Button increases price by 2000 when clicked */}
      <button style={buttonStyle} onClick={() => setPrice(price + 2000)}>
        Increase Price
      </button>
    </div>
  );
};

// Export the Phone component so it can be used in other files
export default Phone;
