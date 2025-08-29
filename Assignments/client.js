// client.js
const net = require("net");
const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create TCP client socket
const client = new net.Socket();

// Connect to server
const PORT = 5000;
client.connect(PORT, "127.0.0.1", () => {
  console.log("Connected to TCP server.");
});

// Handle server messages
client.on("data", (data) => {
  console.log("Server Response:\n" + data.toString());
});

// Handle client close
client.on("close", () => {
  console.log("Connection closed.");
  rl.close();
});

// Handle errors
client.on("error", (err) => {
  console.error("Client error:", err.message);
});

// Read user input and send to server
rl.on("line", (input) => {
  client.write(input);
  if (input.toUpperCase() === "EXIT") {
    client.end();
  }
});
