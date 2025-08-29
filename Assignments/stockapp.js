const mysql = require("mysql2");
const readline = require("readline");

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",   // your username
  password: "anandkumar@123",   //  your MySQL password
  database: "stock_market"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit();
  }
  console.log("Connected to MySQL");
  showMenu();
});

// Readline setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menu
function showMenu() {
  console.log(`
Stock Market Management System
--------------------------------
1. Add Stock
2. View All Stocks
3. View Stock by ID
4. Update Stock Price & Volume
5. Delete Stock
6. Exit
`);
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1": addStock(); break;
      case "2": viewAllStocks(); break;
      case "3": viewStockById(); break;
      case "4": updateStock(); break;
      case "5": deleteStock(); break;
      case "6": exitApp(); break;
      default: console.log("Invalid choice!"); showMenu();
    }
  });
}

// 1. Add Stock
function addStock() {
  rl.question("Enter Stock Symbol: ", (symbol) => {
    if (!symbol) return console.log("Symbol cannot be empty"), showMenu();

    rl.question("Enter Company Name: ", (companyName) => {
      if (!companyName) return console.log("Company name cannot be empty"), showMenu();

      rl.question("Enter Price: ", (price) => {
        if (isNaN(price)) return console.log("Invalid price!"), showMenu();

        rl.question("Enter Volume: ", (volume) => {
          if (isNaN(volume)) return console.log("Invalid volume!"), showMenu();

          const sql = "INSERT INTO stocks (symbol, companyName, price, volume) VALUES (?, ?, ?, ?)";
          db.query(sql, [symbol, companyName, parseFloat(price), parseInt(volume)], (err) => {
            if (err) console.error("Error adding stock:", err);
            else console.log("Stock added successfully!");
            showMenu();
          });
        });
      });
    });
  });
}

// 2. View All Stocks
function viewAllStocks() {
  db.query("SELECT * FROM stocks", (err, results) => {
    if (err) console.error("Error fetching stocks:", err);
    else if (results.length === 0) console.log("No stocks found.");
    else {
      results.forEach(stock => {
        console.log(`ID: ${stock.id}, Symbol: ${stock.symbol}, Company: ${stock.companyName}, Price: ${stock.price}, Volume: ${stock.volume}`);
      });
    }
    showMenu();
  });
}

// 3. View Stock by ID
function viewStockById() {
  rl.question("Enter Stock ID: ", (id) => {
    if (isNaN(id)) return console.log("Invalid ID!"), showMenu();

    db.query("SELECT * FROM stocks WHERE id = ?", [id], (err, results) => {
      if (err) console.error("Error fetching stock:", err);
      else if (results.length === 0) console.log("Stock not found.");
      else {
        const stock = results[0];
        console.log(`ID: ${stock.id}, Symbol: ${stock.symbol}, Company: ${stock.companyName}, Price: ${stock.price}, Volume: ${stock.volume}`);
      }
      showMenu();
    });
  });
}

// 4. Update Stock
function updateStock() {
  rl.question("Enter Stock ID: ", (id) => {
    if (isNaN(id)) return console.log("Invalid ID!"), showMenu();

    rl.question("Enter New Price: ", (price) => {
      if (isNaN(price)) return console.log("Invalid price!"), showMenu();

      rl.question("Enter New Volume: ", (volume) => {
        if (isNaN(volume)) return console.log("Invalid volume!"), showMenu();

        const sql = "UPDATE stocks SET price = ?, volume = ? WHERE id = ?";
        db.query(sql, [parseFloat(price), parseInt(volume), id], (err, result) => {
          if (err) console.error("Error updating stock:", err);
          else if (result.affectedRows === 0) console.log("Stock not found.");
          else console.log("Stock updated successfully!");
          showMenu();
        });
      });
    });
  });
}

// 5. Delete Stock
function deleteStock() {
  rl.question("Enter Stock ID: ", (id) => {
    if (isNaN(id)) return console.log("Invalid ID!"), showMenu();

    db.query("DELETE FROM stocks WHERE id = ?", [id], (err, result) => {
      if (err) console.error("Error deleting stock:", err);
      else if (result.affectedRows === 0) console.log("Stock not found.");
      else console.log("Stock deleted successfully!");
      showMenu();
    });
  });
}

// 6. Exit
function exitApp() {
  console.log("Exiting...");
  rl.close();
  db.end();
}
