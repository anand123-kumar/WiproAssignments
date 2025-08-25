import React, { Component } from "react"; 
// Import React and Component class for creating a class-based component

// Define a class component
class FlightBookingControlled extends Component {
  constructor(props) {
    super(props); // Call parent constructor

    // Initialize state for form fields
    this.state = {
      name: "",         // Passenger name field
      email: "",        // Email field
      gender: "",       // Gender (Male/Female)
      meal: "",         // Meal preference (Veg/Non-Veg)
      request: "",      // Special request text area
      submitted: false, // Flag to check if form is submitted
    };
  }

  // Handle input change dynamically for all fields
  handleChange = (e) => {
    // e.target.name -> name of input field
    // e.target.value -> entered/selected value
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    this.setState({ submitted: true }); // Mark form as submitted
  };

  // Render method (returns UI)
  render() {
    return (
      <div className="container mt-4">
        {/* Main container with margin */}
        <h2>Controlled Flight Booking Form</h2>
        
        {/* Form with submit handler */}
        <form onSubmit={this.handleSubmit} className="p-3 border rounded bg-light">

          {/* Passenger Name field */}
          <div className="mb-3">
            <label className="form-label">Passenger Name</label>
            <input
              type="text"             // Text input
              name="name"             // Name matches state property
              className="form-control"
              value={this.state.name} // Controlled input (linked to state)
              onChange={this.handleChange} // Updates state when typing
              required                 // Validation: must be filled
            />
          </div>

          {/* Email field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"            // Email input (validates format)
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Gender selection (radio buttons) */}
          <div className="mb-3">
            <label className="form-label">Gender</label> <br />
            <input
              type="radio"
              name="gender"          // Same name so only one can be selected
              value="Male"           // Value when selected
              onChange={this.handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              className="ms-3"      // Adds left spacing
              onChange={this.handleChange}
            /> Female
          </div>

          {/* Meal Preference (Dropdown) */}
          <div className="mb-3">
            <label className="form-label">Meal Preference</label>
            <select
              name="meal"              // Connected to state.meal
              className="form-control"
              value={this.state.meal}  // Controlled select input
              onChange={this.handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          {/* Special Request (Textarea) */}
          <div className="mb-3">
            <label className="form-label">Special Request</label>
            <textarea
              name="request"             // Connected to state.request
              className="form-control"
              value={this.state.request}
              onChange={this.handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {/* Show submitted data only if submitted is true */}
        {this.state.submitted && (
          <div className="mt-4">
            <h4>Submitted Details</h4>
            {/* Display data inside table */}
            <table className="table table-bordered">
              <tbody>
                <tr><th>Name</th><td>{this.state.name}</td></tr>
                <tr><th>Email</th><td>{this.state.email}</td></tr>
                <tr><th>Gender</th><td>{this.state.gender}</td></tr>
                <tr><th>Meal</th><td>{this.state.meal}</td></tr>
                <tr><th>Special Request</th><td>{this.state.request}</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Export component so it can be used in other files
export default FlightBookingControlled;
