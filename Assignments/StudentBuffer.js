// 1. Create a Buffer of size 256 bytes
let buffer = Buffer.alloc(256);

// Student 1 data
const student1 = {
  id: 1,
  name: "Kinnera Dhurga",
  age: 11,
  grade: "A"
};

// Convert student object to JSON string
let student1Str = JSON.stringify(student1);

// 2. Write Data to Buffer
let bytesWritten = buffer.write(student1Str, "utf8");
console.log("Bytes written to buffer:", bytesWritten);

// 3. Read Data from Buffer
let bufferData = buffer.toString("utf8", 0, bytesWritten);
console.log("Buffer content as string:", bufferData);

// Parse JSON back
let studentObj = JSON.parse(bufferData);

console.log("Parsed Student Data:");
console.log("ID:", studentObj.id);
console.log("Name:", studentObj.name);
console.log("Age:", studentObj.age);
console.log("Grade:", studentObj.grade);

// 5. Encoding & Decoding (Base64 example)
let base64Data = buffer.toString("base64", 0, bytesWritten);
console.log("Buffer content in base64:");
console.log(base64Data);
