import React, { Component } from "react";  // Import React and Component class

// Define a Car class component
class Car extends Component {
  render() {
    // Destructure props passed to Car component
    const { brand, model, color, year } = this.props;

    return (
      // Outer container with inline CSS styling
      <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial, sans-serif" }}>
        {/* Heading for Car Details */}
        <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>Car Details:</h2>

        {/* Display brand */}
        <p style={{ fontSize: "20px", margin: "5px 0" }}>Brand: {brand}</p>

        {/* Display model */}
        <p style={{ fontSize: "20px", margin: "5px 0" }}>Model: {model}</p>

        {/* Display color */}
        <p style={{ fontSize: "20px", margin: "5px 0" }}>Color: {color}</p>

        {/* Display year */}
        <p style={{ fontSize: "20px", margin: "5px 0" }}>Year: {year}</p>
      </div>
    );
  }
}

// Export Car component so it can be imported elsewhere
export default Car;
