// Import React and Component class to create a class-based component
import React, { Component } from "react";
// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Define a class component named MarriageForm
class MarriageForm extends Component {
  constructor(props) {
    super(props);
    // Define component state with default values
    this.state = {
      brideName: "",   // Store bride's name
      groomName: "",   // Store groom's name
      date: "",        // Store marriage date
      venue: "",       // Store venue name
      submitted: false // Track if form has been submitted
    };
  }

  // Function to handle input field changes
  handleChange = (e) => {
    // Update state dynamically based on input "name" attribute
    this.setState({ [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();              // Prevent default page reload
    this.setState({ submitted: true }); // Set submitted flag to true
  };

  // Render method to display UI
  render() {
    return (
      // Bootstrap container with margin-top
      <div className="container mt-4">
        {/* Card layout for the form */}
        <div className="card p-4">
          {/* Title of the form */}
          <h3 className="text-center">Marriage Form</h3>

          {/* Form starts here, onSubmit calls handleSubmit */}
          <form onSubmit={this.handleSubmit}>

            {/* Bride Name Input */}
            <div className="form-group mb-3">
              <label>Bride Name</label>
              <input
                type="text"
                name="brideName" // matches state property
                className="form-control"
                value={this.state.brideName} // controlled input
                onChange={this.handleChange} // update state on change
              />
            </div>

            {/* Groom Name Input */}
            <div className="form-group mb-3">
              <label>Groom Name</label>
              <input
                type="text"
                name="groomName"
                className="form-control"
                value={this.state.groomName}
                onChange={this.handleChange}
              />
            </div>

            {/* Marriage Date Input */}
            <div className="form-group mb-3">
              <label>Marriage Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>

            {/* Venue Input */}
            <div className="form-group mb-3">
              <label>Venue</label>
              <input
                type="text"
                name="venue"
                className="form-control"
                value={this.state.venue}
                onChange={this.handleChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Conditional rendering: show submitted details only if submitted = true */}
        {this.state.submitted && (
          <div className="card p-4 mt-4">
            <h4 className="text-center">Marriage Details</h4>
            {/* Display submitted values */}
            <p><b>Bride Name:</b> {this.state.brideName}</p>
            <p><b>Groom Name:</b> {this.state.groomName}</p>
            <p><b>Date:</b> {this.state.date}</p>
            <p><b>Venue:</b> {this.state.venue}</p>
          </div>
        )}
      </div>
    );
  }
}

// Export MarriageForm component so it can be used in other files
export default MarriageForm;
