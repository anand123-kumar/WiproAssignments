// src/REACTPROGRAMS/FestivalApp.jsx
import React, { useEffect, useState } from "react"; 
// Importing React and two hooks: useEffect (for side effects) and useState (for managing state)

// Define a functional component called FestivalApp
const FestivalApp = () => {
  const [festival, setFestival] = useState("Diwali"); 
  // State variable "festival" initialized to "Diwali" with updater "setFestival"

  const [countdown, setCountdown] = useState(5); 
  // State variable "countdown" initialized to 5 seconds with updater "setCountdown"

  // Q1: Festival Greeting (runs on every render because no dependency array is provided)
  useEffect(() => {
    console.log("Festival App Rendered"); 
    // Logs message every time the component re-renders
  });

  // Q2: Welcome Message (runs only once when component mounts because of empty array [])
  useEffect(() => {
    console.log("Welcome to Diwali Festival App"); 
    // Log welcome message in console
    alert("Welcome to Diwali Festival App"); 
    // Show an alert popup when the app loads the first time
  }, []);

  // Q3: Festival Change Tracker (runs only when `festival` changes)
  useEffect(() => {
    console.log(`Festival changed to ${festival}. Seconds left: ${countdown}`); 
    // Log festival change and current countdown value
  }, [festival]); 

  // Q4: Countdown Timer (with cleanup)
  useEffect(() => {
    const timer = setInterval(() => {
      // Create a timer that executes every 1 second
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0)); 
      // Reduce countdown by 1 until it reaches 0
    }, 1000);

    // Cleanup function - clears the interval when component unmounts
    return () => clearInterval(timer); 
  }, []); // Empty dependency array ensures timer is created only once

  // Q5: Multiple Dependencies (runs when either festival OR countdown changes)
  useEffect(() => {
    console.log(`Festival: ${festival}, Countdown: ${countdown}`); 
    // Logs both festival and countdown values whenever either one changes
  }, [festival, countdown]);

  // JSX (UI part)
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Main wrapper with centered text and margin */}
      <h1>🎉 Festival React App 🎉</h1> 
      {/* Heading title */}
      <h2>Current Festival: {festival}</h2> 
      {/* Shows currently selected festival */}
      <h3>Countdown: {countdown} seconds</h3> 
      {/* Shows countdown in seconds */}

      {/* Buttons to change the festival */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFestival("Diwali")}>Diwali</button>
        {/* When clicked, setFestival updates to "Diwali" */}
        <button onClick={() => setFestival("Holi")}>Holi</button>
        {/* When clicked, setFestival updates to "Holi" */}
        <button onClick={() => setFestival("Pongal")}>Pongal</button>
        {/* When clicked, setFestival updates to "Pongal" */}
      </div>
    </div>
  );
};

// Exporting the component so it can be used in App.js or other files
export default FestivalApp;
