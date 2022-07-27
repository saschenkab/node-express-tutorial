const path = require("path");

console.log(path.sep); // shows the device path separator

const filePath = path.join("/content", "/subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath); // returns the last portion of the path
console.log(base);

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);
