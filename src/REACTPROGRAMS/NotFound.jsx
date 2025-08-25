import React from "react";

// Define a functional component called "NotFound"
const NotFound = () => {
  return (
    // JSX root element: wrapping everything inside a <div>
    <div>
      {/* Heading for the Not Found page */}
      <h2>Not Found</h2>

      {/* Paragraph showing 404 error message */}
      <p>404 – Page Not Found</p>
    </div>
  );
};

// Export the NotFound component so it can be imported in App.js or Routes
export default NotFound;
