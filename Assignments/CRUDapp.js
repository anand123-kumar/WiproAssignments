const db = require("./mysqldbconnection");

// CREATE
function addStock(symbol, companyName, price, volume, callback) {
  const sql = "INSERT INTO stocks (symbol, companyName, price, volume) VALUES (?, ?, ?, ?)";
  db.query(sql, [symbol, companyName, price, volume], (err, result) => {
    if (err) return callback(err);
    console.log("Added stock with ID:", result.insertId);
    callback(null, result.insertId);
  });
}

// READ
function listStocks(callback) {
  const sql = "SELECT * FROM stocks";
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    console.log("All Stocks:", results);
    callback(null, results);
  });
}

// UPDATE
function updateStockPriceAndVolume(id, price, volume, callback) {
  const sql = "UPDATE stocks SET price = ?, volume = ? WHERE id = ?";
  db.query(sql, [price, volume, id], (err, result) => {
    if (err) return callback(err);
    console.log("Updated records:", result.affectedRows);
    callback(null, result.affectedRows);
  });
}

// DELETE
function deleteStock(id, callback) {
  const sql = "DELETE FROM stocks WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return callback(err);
    console.log("Deleted records:", result.affectedRows);
    callback(null, result.affectedRows);
  });
}

// Sequential Execution
addStock("AAPL", "Apple Inc.", 175.50, 1000, (err, insertedId) => {
  if (err) return console.error(err);

  listStocks((err, stocks) => {
    if (err) return console.error(err);

    updateStockPriceAndVolume(insertedId, 180.00, 1200, (err, updated) => {
      if (err) return console.error(err);

      deleteStock(insertedId, (err, deleted) => {
        if (err) return console.error(err);

        db.end((err) => {
          if (err) console.error("Error closing MySQL connection:", err);
          else console.log("MySQL connection closed");
        });
      });
    });
  });
});
