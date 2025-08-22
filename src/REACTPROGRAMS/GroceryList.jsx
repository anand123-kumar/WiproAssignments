// Import React to create components
import React from "react";

// Functional component GroceryList with 'items' passed as props
function GroceryList({ items }) {
  // Function to handle button click event
  const handleAddToCart = () => {
    alert("Groceries Added to Cart!"); // Shows an alert message
  };

  // Inline CSS styles object
  const styles = {
    container: {
      textAlign: "center", // Center aligns text
      marginTop: "30px",   // Adds space above the container
      fontFamily: "Arial, sans-serif", // Sets font style
    },
    title: {
      fontSize: "28px",    // Large font size for title
      fontWeight: "bold",  // Makes text bold
      marginBottom: "15px", // Space below the title
    },
    list: {
      listStyleType: "disc", // Adds bullet points
      display: "inline-block", // Makes list inline but block styled
      textAlign: "left",      // Aligns list text to left
      fontSize: "20px",       // Increases font size of list items
      marginBottom: "20px",   // Space below list
    },
    item: {
      margin: "6px 0", // Vertical spacing between list items
    },
    button: {
      backgroundColor: "white",  // Default background color
      border: "2px solid black", // Black border around button
      padding: "10px 20px",      // Inner spacing
      fontSize: "18px",          // Larger font for button text
      fontWeight: "bold",        // Bold text
      borderRadius: "6px",       // Rounded corners
      cursor: "pointer",         // Pointer cursor on hover
      transition: "0.3s ease",   // Smooth transition for hover effects
    },
  };

  // JSX returned by the component
  return (
    <div style={styles.container}>
      {/* Title */}
      <h2 style={styles.title}>Groceries List:</h2>

      {/* Unordered list of grocery items */}
      <ul style={styles.list}>
        {/* Map through 'items' array and render each as a list item */}
        {items.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>

      {/* Line break for spacing */}
      <br />

      {/* Button to add groceries to cart */}
      <button
        style={styles.button}
        // Change background and text color on mouse hover
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "black";
          e.target.style.color = "white";
        }}
        // Reset to original style when mouse leaves
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
        }}
        // Calls handleAddToCart when clicked
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

// Export the component to use in other files
export default GroceryList;
