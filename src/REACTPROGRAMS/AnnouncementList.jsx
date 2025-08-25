import React from "react"; 
import { usePowerCut } from "./PowerCutContext"; 

// Define functional component 'AnnouncementList'
const AnnouncementList = () => {
  // Destructure 'announcements' from the context (shared data)
  const { announcements } = usePowerCut();

  // Return JSX to render UI
  return (
    <div> {/* Parent container */}
      <h5>Power Cut Announcements</h5> {/* Heading for the section */}

      {/* Scrollable container with border and padding */}
      <div
        className="border p-2 rounded" // Bootstrap classes for styling (border, padding, rounded corners)
        style={{ maxHeight: "300px", overflowY: "auto" }} // Inline CSS: restrict height and add vertical scroll
      >
        {/* Conditional rendering → if announcements array is empty, show fallback text */}
        {announcements.length === 0 ? (
          <p className="text-muted">No announcements yet.</p> // Show muted text if no announcements
        ) : (
          // Otherwise, map through the announcements array
          announcements.map((a) => (
            <div
              key={a.id} // Unique key required for each list element
              className="border rounded p-2 mb-2" // Styling: border, rounded corners, padding, margin bottom
              style={{ backgroundColor: "#f8f9fa" }} // Inline CSS: light background color
            >
              {/* Display individual announcement details */}
              <p>
                <strong>Street:</strong> {a.street} {/* Show street name */}
              </p>
              <p>
                <strong>Message:</strong> {a.message} {/* Show power cut message */}
              </p>
              <p>
                <strong>Time:</strong> {a.time} {/* Show time of power cut */}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Export component so it can be used in other files
export default AnnouncementList;
