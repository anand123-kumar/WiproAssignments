import React, { useState } from "react";

function FruitCommunication() {
  // Parent's state holding fruit list
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  // State to store selected fruit (for sibling communication)
  const [selectedFruit, setSelectedFruit] = useState("");

  // Function to add a fruit (received from Child B)
  const addFruit = (newFruit) => {
    setFruits([...fruits, newFruit]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Parent → Child / Child → Parent / Sibling Communication</h2>

      {/* Child A gets fruits list and selection function */}
      <ChildA fruits={fruits} onSelectFruit={setSelectedFruit} />

      {/* Child B can send a fruit back to parent */}
      <ChildB onSendFruit={addFruit} />

      {/* Child C shows the fruit selected in Child A */}
      <ChildC selectedFruit={selectedFruit} />
    </div>
  );
}

// Displays fruits list and allows selecting one
function ChildA({ fruits, onSelectFruit }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid green" }}>
      <h3>Child A (Fruit List)</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}{" "}
            <button onClick={() => onSelectFruit(fruit)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sends new fruit ("Orange") back to parent
function ChildB({ onSendFruit }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid blue" }}>
      <h3>Child B</h3>
      <button onClick={() => onSendFruit("Orange")}>
        Send Fruit (Orange)
      </button>
    </div>
  );
}

// Displays the fruit selected from Child A
function ChildC({ selectedFruit }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid red" }}>
      <h3>Child C (Selected Fruit)</h3>
      <p>{selectedFruit ? selectedFruit : "No fruit selected yet"}</p>
    </div>
  );
}

export default FruitCommunication;
