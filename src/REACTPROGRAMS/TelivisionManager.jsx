// Import React and Component class from 'react' package
import React, { Component } from "react";

// Functional Component to display a list of television models
function TelevisionList(props) {
  return (
    <div>
      {/* Heading for Television Models */}
      <h3>Television Models</h3>

      {/* Unordered list to display models */}
      <ul>
        {/* Map through models array passed as props and display each model */}
        {props.models.map((model, index) => (
          // Each list item must have a unique key, here we use index
          <li key={index}>{model}</li>
        ))}
      </ul>
    </div>
  );
}

// Class Component to manage television models
class TelevisionManager extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props); // Call parent constructor (required in class components)

    // Define initial state with default models and an empty input
    this.state = {
      models: ["Panasonic", "Sony", "LG"], // Initial array of television models
      newModel: "" // New model input value (controlled input)
    };
  }

  // Event handler to update state when typing in input box
  handleChange = (e) => {
    // e.target.value holds the current text in the input box
    this.setState({ newModel: e.target.value });
  };

  // Method to add a new model into the models array
  addModel = () => {
    // Prevent adding empty strings (trim removes whitespace)
    if (this.state.newModel.trim() !== "") {
      // Update state by appending newModel to existing models array
      this.setState((prevState) => ({
        models: [...prevState.models, prevState.newModel], // Spread operator adds old models + new one
        newModel: "" // Clear input field after adding
      }));
    }
  };

  // Render method defines what appears on the UI
  render() {
    return (
      <div>
        {/* Heading for manager */}
        <h2>Television Manager</h2>

        {/* Input field bound to state.newModel */}
        <input
          type="text"
          value={this.state.newModel} // Controlled input: value comes from state
          onChange={this.handleChange} // Calls handleChange on typing
        />

        {/* Button to add new model to the list */}
        <button onClick={this.addModel}>Add</button>

        {/* Pass models state as props to functional component */}
        <TelevisionList models={this.state.models} />
      </div>
    );
  }
}

// Export the class component to use in other files
export default TelevisionManager;
