// Import React and useState hook from React library
import React, { useState } from "react";
// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Define a functional component named BakingItemsForm
const BakingItemsForm = () => {
  // useState hook to store form field values in one object (form state)
  const [form, setForm] = useState({
    itemName: "",     // item name field
    quantity: "",     // quantity field
    ingredients: "",  // ingredients field
    bakingTime: "",   // baking time field
    category: "Cake"  // default category value set to "Cake"
  });

  // useState hook to store list of submitted baking items
  const [items, setItems] = useState([]);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target; // extract name and value from input
    // Update only the changed field using spread operator
    setForm({ ...form, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    setItems([...items, form]); // Add the current form data to items list
    // Reset form fields back to initial empty state
    setForm({ itemName: "", quantity: "", ingredients: "", bakingTime: "", category: "Cake" });
  };

  // JSX returned by the component
  return (
    // Bootstrap container with margin top
    <div className="container mt-4">
      {/* Card UI wrapper with padding and shadow */}
      <div className="card p-3 shadow-sm">
        {/* Heading for the form */}
        <h4 className="mb-3">🧁 Baking Items Form</h4>

        {/* Form with submit handler */}
        <form onSubmit={handleSubmit}>
          {/* Text input for Item Name */}
          <div className="form-group mb-2">
            <label>Item Name</label>
            <input
              type="text" // input type text
              name="itemName" // bound to form.itemName
              className="form-control" // Bootstrap styling
              value={form.itemName} // controlled input value
              onChange={handleChange} // update form state when typing
              required // field must be filled before submitting
            />
          </div>

          {/* Number input for Quantity */}
          <div className="form-group mb-2">
            <label>Quantity</label>
            <input
              type="number" // input type number
              name="quantity" // bound to form.quantity
              className="form-control"
              value={form.quantity} // controlled value
              onChange={handleChange} // update state on change
              required
            />
          </div>

          {/* Text input for Ingredients */}
          <div className="form-group mb-2">
            <label>Ingredients</label>
            <input
              type="text" // input type text
              name="ingredients" // bound to form.ingredients
              className="form-control"
              value={form.ingredients}
              onChange={handleChange}
              required
            />
          </div>

          {/* Text input for Baking Time */}
          <div className="form-group mb-2">
            <label>Baking Time (minutes)</label>
            <input
              type="text" // input type text
              name="bakingTime" // bound to form.bakingTime
              className="form-control"
              value={form.bakingTime}
              onChange={handleChange}
              required
            />
          </div>

          {/* Dropdown select for Category */}
          <div className="form-group mb-3">
            <label>Category</label>
            <select
              name="category" // bound to form.category
              className="form-control"
              value={form.category} // controlled value
              onChange={handleChange} // update on change
            >
              <option value="Cake">Cake</option>
              <option value="Bread">Bread</option>
              <option value="Pastry">Pastry</option>
            </select>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success w-100">
            Add Baking Item
          </button>
        </form>
      </div>

      {/* Display submitted items in a table only if items array has data */}
      {items.length > 0 && (
        <div className="mt-4">
          {/* Table title */}
          <h5>Baking Items List</h5>
          {/* Bootstrap styled table */}
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th> {/* Row index */}
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through items array and display each row */}
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* Serial number */}
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.bakingTime} mins</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Export component to use in other files
export default BakingItemsForm;
