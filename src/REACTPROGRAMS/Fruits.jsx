import React, { Component } from "react";

//  Functional Component to display list of fruits passed as props
function FruitList(props) {
  return (
    <div>
      <h3>Fruit List</h3>
      <ul>
        {/* Loop through fruits array and display each fruit as a list item */}
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> 
        ))}
      </ul>
    </div>
  );
}

// Class Component to manage state and add fruits
class Fruits extends Component {
  constructor(props) {
    super(props);
    // Initial state with some fruits and empty input for new fruit
    this.state = {
      fruits: ["Mango", "Curbuja", "Banana"], 
      newFruit: "" 
    };
  }

  //  Handles input field changes and updates state
  handleChange = (e) => {
    this.setState({ newFruit: e.target.value });
  };

  // Adds new fruit to the fruits array if not empty
  addFruit = () => {
    if (this.state.newFruit.trim() !== "") {
      this.setState((prevState) => ({
        fruits: [...prevState.fruits, prevState.newFruit], // append new fruit
        newFruit: "" // reset input field
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Fruits</h2>

        {/* ✅ Input field for new fruit with Add button */}
        <input
          type="text"
          value={this.state.newFruit}
          onChange={this.handleChange}
        />
        <button onClick={this.addFruit}>Add</button>

        {/* ✅ Pass fruits array to child component for display */}
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

//  Export Fruits component for use in other files
export default Fruits;
