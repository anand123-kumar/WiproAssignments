// Import React and useState hook for managing local state
import React, { useState } from "react";
// Import custom context hook to interact with global PowerCut context
import { usePowerCut } from "./PowerCutContext";

// Functional component for sending announcements
const SendAnnouncement = () => {
  // Extract addAnnouncement function from PowerCut context
  const { addAnnouncement } = usePowerCut();

  // Local state to store street name input
  const [street, setStreet] = useState("");
  // Local state to store message input
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    // Validate that both fields are filled
    if (!street.trim() || !message.trim()) {
      alert("Please fill in both Street and Message."); // Show alert if empty
      return; // Stop execution if validation fails
    }

    // Call context method to add announcement
    addAnnouncement(street, message);
    // Clear street input after submission
    setStreet("");
    // Clear message input after submission
    setMessage("");
  };

  return (
    // Wrapper div with margin-bottom for spacing
    <div className="mb-4">
      {/* Title for the form */}
      <h4>Street Power Cut Announcements</h4>

      {/* Form element with submit handler */}
      <form onSubmit={handleSubmit}>

        {/* Street Name Input Field */}
        <div className="mb-2">
          <label className="form-label">Street Name:</label>
          <input
            type="text" // Text input for street name
            className="form-control" // Bootstrap styling
            value={street} // Controlled input bound to state
            onChange={(e) => setStreet(e.target.value)} // Update state on change
          />
        </div>

        {/* Message Input Field */}
        <div className="mb-2">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control" // Bootstrap styling
            rows="2" // Height of textarea
            value={message} // Controlled textarea bound to state
            onChange={(e) => setMessage(e.target.value)} // Update state on change
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Send Announcement
        </button>
      </form>
    </div>
  );
};

// Export the component so it can be used in other files
export default SendAnnouncement;
