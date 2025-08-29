// app.js
const { calculateVAT } = require("./VatCalculator");

// Define jewellery item
const jewellery = { id: 1, name: "Gold Necklace", price: 80000 };

// Calculate VAT and total price
const result = calculateVAT(jewellery.price);
// Display output
console.log(`Jewellery ID: ${jewellery.id}`);
console.log(`Name: ${jewellery.name}`);
console.log(`Price: ${jewellery.price}`);
console.log(`VAT (3%): ${result.vat}`);
console.log(`Total Price: ${result.totalPrice}`);
