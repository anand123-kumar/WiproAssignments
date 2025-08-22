// Import React and Component class from react library
import React, { Component } from 'react';

// Define inline styles as a JavaScript object
const styles = {
  container: {               // Styles for main container
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {                   // Styles for restaurant title
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 20px 0'
  },
  info: {                    // Styles for restaurant info (location, hours)
    fontSize: '16px',
    margin: '5px 0'
  },
  menuTitle: {               // Styles for menu heading
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '20px 0 10px 0'
  },
  menuList: {                // Styles for menu list (unordered list)
    listStyleType: 'disc',   // Bulleted list
    marginLeft: '40px',
    padding: 0
  },
  menuItem: {                // Styles for individual menu items
    marginBottom: '5px',
    fontSize: '16px'
  }
};

// Class component for a single Menu Item
class MenuItem extends Component {
  render() {
    // Destructure props received from parent
    const { name, price, category, available } = this.props;
    return (
      // Display item details in a <li> with styles
      <li style={styles.menuItem}>
        {name} - ₹ {price} ({category}), {available ? 'Available' : 'Not Available'}
        {/* Show name, price, category, and availability */}
      </li>
    );
  }
}

// Class component for Restaurant
class Restaurant extends Component {
  render() {
    // Menu items array with details of each dish
    const menuItems = [
      { name: 'Mutton Biryani', price: 450, category: 'Main Course', available: true },
      { name: 'Chicken Biryani', price: 200, category: 'Main Course', available: true },
      { name: 'Onion Dosa', price: 50, category: 'Breakfast', available: true },
      { name: 'Gulab Jamun', price: 40, category: 'Dessert', available: false },
      { name: 'Veg Thali', price: 120, category: 'Combo', available: true }
    ];

    return (
      // Main container with applied styles
      <div style={styles.container}>
        {/* Restaurant information */}
        <h1 style={styles.title}>Restaurant Name: Spice Hub</h1>
        <p style={styles.info}>Location: Block C, Fifth Floor</p>
        <p style={styles.info}>Open Hours: 9:00 AM - 11:00 PM</p>
        
        {/* Menu heading */}
        <h2 style={styles.menuTitle}>Restaurant Menu:</h2>

        {/* Unordered list for menu items */}
        <ul style={styles.menuList}>
          {/* Loop through each menu item and render MenuItem component */}
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index}          // Unique key for each item
              name={item.name}     // Pass name as prop
              price={item.price}   // Pass price as prop
              category={item.category} // Pass category as prop
              available={item.available} // Pass availability as prop
            />
          ))}
        </ul>
      </div>
    );
  }
}

// Export Restaurant component to be used in other files
export default Restaurant;
