const fs = require("fs");

// 1. Create a Writable Stream and write fruit records
const fruits = [
  { id: 1, name: "Apple", color: "Red", price: 200 },
  { id: 2, name: "Banana", color: "Yellow", price: 70 },
  { id: 3, name: "Mango", color: "Orange", price: 100 }
];

const writeStream = fs.createWriteStream("fruits.txt");

fruits.forEach(fruit => {
  writeStream.write(JSON.stringify(fruit) + "\n"); // write each fruit on a new line
});

writeStream.end(); // close the stream
writeStream.on("finish", () => {
  console.log("Data written to fruits.txt successfully.");

  // 2. Create a Readable Stream
  console.log("Reading fruits.txt using stream...");
  const readStream = fs.createReadStream("fruits.txt", { encoding: "utf8" });

  let leftover = "";

  readStream.on("data", chunk => {
    leftover += chunk;
    let lines = leftover.split("\n");
    leftover = lines.pop(); // keep last incomplete line (if any)

    lines.forEach(line => {
      if (line.trim().length > 0) {
        const fruitObj = JSON.parse(line);
        console.log(
          `Fruit ID: ${fruitObj.id}, Name: ${fruitObj.name}, Color: ${fruitObj.color}, Price: ${fruitObj.price}`
        );
      }
    });
  });

  readStream.on("end", () => {
    // 3. Pipe Streams (copy fruits.txt → fruits_copy.txt)
    const copyStream = fs.createReadStream("fruits.txt");
    const destination = fs.createWriteStream("fruits_copy.txt");

    copyStream.pipe(destination);

    destination.on("finish", () => {
      console.log("Content copied to fruits_copy.txt using pipe.");
    });
  });

  // 4. Error Handling
  readStream.on("error", err => {
    console.error("Error while reading file:", err);
  });
});
