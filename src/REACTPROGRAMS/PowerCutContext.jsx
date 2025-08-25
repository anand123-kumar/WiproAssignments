// Import React core functions and hooks
import React, { createContext, useContext, useState } from "react";


// Create a new context object for power cut announcements
const PowerCutContext = createContext();

// Create a custom hook for easier access to context in components
export const usePowerCut = () => useContext(PowerCutContext);


// Provider component that wraps children and provides state + functions
export const PowerCutProvider = ({ children }) => {
  // State to store all announcements (array of objects)
  const [announcements, setAnnouncements] = useState([]);

  // Function to add a new announcement
  const addAnnouncement = (street, message) => {
    // Create a new announcement object
    const newAnnouncement = {
      id: Date.now(),                // Unique ID based on timestamp
      street,                        // Street name passed as argument
      message,                       // Power cut message passed as argument
      time: new Date().toLocaleTimeString(), // Current time as readable string
    };

    // Add the new announcement at the top of the list (latest first)
    setAnnouncements((prev) => [newAnnouncement, ...prev]);
  };

  // Return provider component with announcements and addAnnouncement function
  return (
    <PowerCutContext.Provider value={{ announcements, addAnnouncement }}>
      {children} {/* Render child components that will consume this context */}
    </PowerCutContext.Provider>
  );
};
