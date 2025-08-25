import React, { Component, createRef } from "react"; 
// Import React, Component class, and createRef for uncontrolled inputs

class FlightBookingUncontrolled extends Component {
  constructor(props) {
    super(props);

    // Create refs for each form field (to directly access DOM values)
    this.flightNoRef = createRef();      // Ref for flight number
    this.sourceRef = createRef();        // Ref for source
    this.destinationRef = createRef();   // Ref for destination
    this.dateRef = createRef();          // Ref for travel date
    this.termsRef = createRef();         // Ref for terms checkbox

    // State to store submitted form data
    this.state = { submittedData: null };
  }

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Collect values directly from refs instead of state
    this.setState({
      submittedData: {
        flightNo: this.flightNoRef.current.value,  // Get value of flight no
        source: this.sourceRef.current.value,      // Get value of source
        destination: this.destinationRef.current.value, // Get value of destination
        date: this.dateRef.current.value,          // Get selected travel date
        terms: this.termsRef.current.checked ? "Accepted" : "Not Accepted", // Checkbox value
      },
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Uncontrolled Flight Booking Form</h2>

        {/* Form using uncontrolled components */}
        <form onSubmit={this.handleSubmit} className="p-3 border rounded bg-light">

          {/* Flight Number Input */}
          <div className="mb-3">
            <label className="form-label">Flight Number</label>
            <input type="text" ref={this.flightNoRef} className="form-control" required />
          </div>

          {/* Source Input */}
          <div className="mb-3">
            <label className="form-label">Source</label>
            <input type="text" ref={this.sourceRef} className="form-control" required />
          </div>

          {/* Destination Input */}
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input type="text" ref={this.destinationRef} className="form-control" required />
          </div>

          {/* Travel Date Input */}
          <div className="mb-3">
            <label className="form-label">Travel Date</label>
            <input type="date" ref={this.dateRef} className="form-control" required />
          </div>

          {/* Terms Checkbox */}
          <div className="mb-3">
            <input type="checkbox" ref={this.termsRef} /> I accept terms & conditions
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success">Submit</button>
        </form>

        {/* Show submitted data after form submission */}
        {this.state.submittedData && (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Booking Details</h5>
              <p><b>Flight No:</b> {this.state.submittedData.flightNo}</p>
              <p><b>Source:</b> {this.state.submittedData.source}</p>
              <p><b>Destination:</b> {this.state.submittedData.destination}</p>
              <p><b>Date:</b> {this.state.submittedData.date}</p>
              <p><b>Terms:</b> {this.state.submittedData.terms}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Exporting component
export default FlightBookingUncontrolled;
