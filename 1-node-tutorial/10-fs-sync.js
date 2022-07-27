const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// const fs = require("fs");

// fs.readFileSync

// reading files and decoding
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

// writing new file
writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);

setTimeout(() => {
  console.log("omg");
}, 2000);

console.log("Done with this task");
console.log("Starting the next task");
