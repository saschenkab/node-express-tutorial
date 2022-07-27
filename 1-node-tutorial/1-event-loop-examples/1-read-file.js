// EVENT LOOP  - is what allows node,js to perform a non-blocking (input/output) operations -- despite the fact that javascript is single-threaded -- by offloading operations to the system kernel whenever possible

const { readFile } = require("fs");

console.log("Started a first task");
// CHECK FILE PATH
readFile("./content/first.txt", "utf8", async (error, result) => {
  if (error) {
    console.log(error);
  }
  console.log(result);
  console.log("Completed first task");
});
console.log("Starting next task");
