// Import React core library, useState for managing state, and useEffect for lifecycle effects
import React, { useEffect, useState } from "react";  

// Import axios for making HTTP requests (API calls)
import axios from "axios";  

// Import Bootstrap CSS framework for styling the UI
import "bootstrap/dist/css/bootstrap.min.css"; 


// Define functional component for tailoring inventory
const TailoringInventory = () => {
  // State to hold tailoring items (fetched from API)
  const [items, setItems] = useState([]);   

  // State to track loading status (true initially while fetching data)
  const [loading, setLoading] = useState(true); 

  // State to track any error messages during API call
  const [error, setError] = useState(null); 


  // useEffect hook runs after component mounts
  useEffect(() => {
    // Make GET request to JSON server API
    axios
      .get("http://localhost:5000/tailoringItems") // Fetch tailoringItems from local server
      .then((response) => {
        // If successful, update items state with API data
        setItems(response.data);  

        // Stop loading after data is fetched
        setLoading(false);        
      })
      .catch((err) => {
        // If error occurs, set error message
        setError("Failed to fetch data!"); 

        // Stop loading even if error occurs
        setLoading(false);                 
      });
  }, []); 
  // Empty dependency array → ensures this effect runs ONLY once (on component mount)


  // If still loading, show loading message
  if (loading) {
    return <p className="text-center mt-3">Loading tailoring inventory...</p>;
  }

  // If error occurred, show error message in red
  if (error) {
    return <p className="text-danger text-center mt-3">{error}</p>;
  }


  return (
    // Container with margin-top for spacing
    <div className="container mt-4">

      {/* Page heading centered with margin bottom */}
      <h2 className="mb-3 text-center">Tailoring Shop Inventory</h2>

      {/* Bootstrap table with border & striped rows */}
      <table className="table table-bordered table-striped">

        {/* Table header row with dark background */}
        <thead className="table-dark">
          <tr>
            <th>ID</th> {/* Item ID column */}
            <th>Name</th> {/* Item name column */}
            <th>Size</th> {/* Item size column */}
            <th>Price (₹)</th> {/* Item price column */}
          </tr>
        </thead>

        {/* Table body where data will be displayed */}
        <tbody>
          {/* Loop through items array and create one row per item */}
          {items.map((item) => (
            <tr key={item.id}> {/* Unique key for each row */}
              <td>{item.id}</td>      {/* Display item ID */}
              <td>{item.name}</td>    {/* Display item Name */}
              <td>{item.size}</td>    {/* Display item Size */}
              <td>{item.price}</td>   {/* Display item Price */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export component so it can be imported in other files
export default TailoringInventory;
