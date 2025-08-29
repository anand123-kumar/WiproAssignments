// server.js
const net = require("net");

// Jewellery stock (in-memory)
let jewelleryStock = [
  { id: 1, name: "Gold Ring", quantity: 5, price: 15000 },
  { id: 2, name: "Silver Necklace", quantity: 3, price: 5000 }
];

// Create TCP server
const server = net.createServer((socket) => {
  console.log("New client connected.");

  socket.write("Welcome to Jewellery Store TCP Server!\n");
  socket.write("Available Commands: LIST | ADD <id> <name> <quantity> <price> | EXIT\n");

  // Handle incoming data from client
  socket.on("data", (data) => {
    const input = data.toString().trim();
    console.log(`Received command: ${input}`);

    if (input.toUpperCase() === "LIST") {
      // Send jewellery list
      let response = jewelleryStock
        .map(
          (item) =>
            `ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`
        )
        .join("\n");
      socket.write(response + "\n");
    } else if (input.toUpperCase().startsWith("ADD")) {
      // Example: ADD 3 DiamondEarring 2 75000
      const parts = input.split(" ");
      if (parts.length >= 5) {
        const id = parseInt(parts[1]);
        const name = parts[2];
        const quantity = parseInt(parts[3]);
        const price = parseFloat(parts[4]);

        jewelleryStock.push({ id, name, quantity, price });
        console.log(`Added new item: ${name}`);
        socket.write("Jewellery item added successfully!\n");
      } else {
        socket.write("Invalid ADD command. Usage: ADD <id> <name> <quantity> <price>\n");
      }
    } else if (input.toUpperCase() === "EXIT") {
      socket.write("Client disconnected.\n");
      socket.end();
    } else {
      socket.write("Invalid command. Try again.\n");
    }
  });

  // Handle client disconnection
  socket.on("end", () => {
    console.log("Client disconnected.");
  });

  socket.on("error", (err) => {
    console.error("Socket error:", err.message);
  });
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`TCP Server running on port ${PORT}`);
});

server.on("error", (err) => {
  console.error("Server error:", err.message);
});
