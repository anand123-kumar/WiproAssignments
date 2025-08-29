// vatCalculator.js

function calculateVAT(price) {
  const vatRate = 3; // Fixed at 3%
  const vat = (price * vatRate) / 100;
  const totalPrice = price + vat;

  return {
    vat: vat,
    totalPrice: totalPrice
  };
}

module.exports = { calculateVAT };
