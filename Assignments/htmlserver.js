// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html on root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { trackingId, senderName, receiverName, pickupAddress, deliveryAddress, weight } = req.body;

  // Validate all fields
  if (!trackingId || !senderName || !receiverName || !pickupAddress || !deliveryAddress || !weight) {
    return res.send("Error: All fields are required!");
  }

  const weightNum = parseFloat(weight);
  const cost = 50 + (weightNum * 20);

  // Respond with confirmation
  res.send(`
    <h2>Courier Booking Confirmation</h2>
    <p><b>Courier Tracking ID:</b> ${trackingId}</p>
    <p><b>Sender:</b> ${senderName}</p>
    <p><b>Receiver:</b> ${receiverName}</p>
    <p><b>Pickup:</b> ${pickupAddress}</p>
    <p><b>Delivery:</b> ${deliveryAddress}</p>
    <p><b>Weight:</b> ${weightNum} kg</p>
    <p><b>Delivery Cost:</b> ${cost}</p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
