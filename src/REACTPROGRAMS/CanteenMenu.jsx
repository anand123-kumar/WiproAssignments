// Importing the React library to create components
import React from "react";

// Functional component "CanteenItem" which accepts props: name, price, category, available
const CanteenItem = ({ name, price, category, available }) => {
  // Inline style object for each list item
  const itemStyle = {
    fontSize: "18px",   // Font size of item text
    margin: "6px 0"     // Vertical margin between items
  };

  // JSX returned by the CanteenItem component
  return (
    // <li> element with applied inline style
    <li style={itemStyle}>
      {/* Displaying item name, price, category, and availability */}
      {name} - Price: ₹{price} - {category} -{" "}
      {available ? "Available" : "Not Available"} 
      {/* Conditional rendering: if available is true → "Available", else → "Not Available" */}
    </li>
  );
};

// Functional component "CanteenMenu" which holds the canteen information and menu list
const CanteenMenu = () => {
  // Inline style object for the outer container
  const containerStyle = {
    fontFamily: "Arial, sans-serif", // Font style for all content
    margin: "30px",                  // Outer margin for spacing
    padding: "20px",                 // Inner padding for content spacing
    lineHeight: "1.6"                // Line spacing between text
  };

  // Inline style object for heading
  const headingStyle = {
    fontSize: "22px",    // Font size for heading
    fontWeight: "bold",  // Makes text bold
    marginBottom: "10px" // Space below the heading
  };

  // JSX returned by the CanteenMenu component
  return (
    // Main container <div> with containerStyle applied
    <div style={containerStyle}>
      {/* Canteen heading */}
      <h2 style={headingStyle}>Canteen Name: Campus Food Court</h2>

      {/* Canteen location info */}
      <p>Location: Block B, Secound Floor</p>

      {/* Canteen working hours */}
      <p>Open Hours: 10:00 AM - 11:00 PM</p>

      {/* Menu section heading */}
      <h3>Canteen Menu:</h3>

      {/* Unordered list to display canteen items */}
      <ul>
        {/* Each CanteenItem component represents one food item */}
        <CanteenItem name="Idli" price={20} category="Breakfast" available={true} />
        <CanteenItem name="Dosa" price={25} category="Breakfast" available={true} />
        <CanteenItem name="Vada" price={30} category="Snack" available={false} />
        <CanteenItem name="Poori" price={45} category="Breakfast" available={true} />
        <CanteenItem name="Meals" price={100} category="Lunch" available={true} />
      </ul>
    </div>
  );
};

// Exporting CanteenMenu so it can be imported and used in other files
export default CanteenMenu;
