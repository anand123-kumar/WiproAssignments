// Import React and Component class from the React library
import React, { Component } from "react";
// Import Bootstrap CSS styles
import "bootstrap/dist/css/bootstrap.min.css";

// Define a class-based component named AccessoriesForm
class AccessoriesForm extends Component {
  // Constructor method is called when the component is created
  constructor(props) {
    super(props); // Call parent class constructor with props
    // Initialize state with default values
    this.state = {
      accessoryName: "", // For text input (Accessory Name)
      description: "",   // For textarea (Description)
      category: "",      // For select dropdown (Category)
      brand: "",         // For radio buttons (Brand)
      available: false,  // For checkbox (Available or not)
      warranty: "",      // For number input (Warranty in years)
      submitted: false   // Flag to check if form is submitted
    };
  }

  // Handle input changes dynamically for all form fields
  handleChange = (e) => {
    // Destructure name, value, type, and checked from the event target
    const { name, value, type, checked } = e.target;
    // Update the state: if input is checkbox use "checked", else use "value"
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    this.setState({ submitted: true }); // Set submitted flag to true
  };

  // Render method returns the JSX to display on the screen
  render() {
    return (
      // Bootstrap container with margin-top spacing
      <div className="container mt-4">
        {/* Heading for the form */}
        <h3 className="text-center">Accessories Form</h3>

        {/* Form element with submit handler */}
        <form onSubmit={this.handleSubmit}>

          {/* Text input for Accessory Name */}
          <div className="form-group mb-2">
            <label>Accessory Name</label>
            <input
              type="text" // Input type text
              name="accessoryName" // Bound to state property "accessoryName"
              className="form-control" // Bootstrap styling
              value={this.state.accessoryName} // Controlled component value
              onChange={this.handleChange} // Update state on change
            />
          </div>

          {/* Textarea input for Description */}
          <div className="form-group mb-2">
            <label>Description</label>
            <textarea
              name="description" // Bound to state property "description"
              className="form-control" // Bootstrap styling
              value={this.state.description} // Controlled value
              onChange={this.handleChange} // Update state on change
            />
          </div>

          {/* Select dropdown for Category */}
          <div className="form-group mb-2">
            <label>Category</label>
            <select
              name="category" // Bound to state property "category"
              className="form-control" // Bootstrap styling
              value={this.state.category} // Controlled value
              onChange={this.handleChange} // Update state on change
            >
              <option value="">Select Category</option> {/* Default option */}
              <option value="Electronics">Electronics</option> {/* Option 1 */}
              <option value="Fashion">Fashion</option>         {/* Option 2 */}
              <option value="Sports">Sports</option>           {/* Option 3 */}
            </select>
          </div>

          {/* Radio buttons for Brand selection */}
          <div className="form-group mb-2">
            <label>Brand</label><br />
            <input
              type="radio" // Radio input
              name="brand" // Bound to state property "brand"
              value="Sony" // Value Sony
              checked={this.state.brand === "Sony"} // Checked if brand is Sony
              onChange={this.handleChange} // Update state on change
            /> Sony
            <input
              type="radio"
              name="brand"
              value="Samsung" // Value Samsung
              className="ms-3" // Bootstrap spacing
              checked={this.state.brand === "Samsung"} // Checked if brand is Samsung
              onChange={this.handleChange}
            /> Samsung
            <input
              type="radio"
              name="brand"
              value="LG" // Value LG
              className="ms-3"
              checked={this.state.brand === "LG"} // Checked if brand is LG
              onChange={this.handleChange}
            /> LG
          </div>

          {/* Checkbox for availability */}
          <div className="form-group mb-2">
            <input
              type="checkbox" // Checkbox input
              name="available" // Bound to state property "available"
              checked={this.state.available} // Controlled value (true/false)
              onChange={this.handleChange} // Update state on change
            /> Available in stock
          </div>

          {/* Number input for Warranty */}
          <div className="form-group mb-2">
            <label>Warranty (years)</label>
            <input
              type="number" // Input type number
              name="warranty" // Bound to state property "warranty"
              className="form-control" // Bootstrap styling
              value={this.state.warranty} // Controlled value
              onChange={this.handleChange} // Update state on change
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>

        {/* Conditional rendering: display submitted details only if submitted */}
        {this.state.submitted && (
          <div className="mt-4">
            <h4 className="text-center">Submitted Details</h4>
            {/* Bootstrap styled table */}
            <table className="table table-bordered">
              <tbody>
                {/* Display each submitted detail in a row */}
                <tr>
                  <th>Accessory Name</th>
                  <td>{this.state.accessoryName}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{this.state.description}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{this.state.category}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{this.state.brand}</td>
                </tr>
                <tr>
                  <th>Available</th>
                  <td>{this.state.available ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <th>Warranty</th>
                  <td>{this.state.warranty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Export the component so it can be imported in other files
export default AccessoriesForm;
