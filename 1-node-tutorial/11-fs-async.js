const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
  }

  const first = result;

  readFile("./content/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
    }

    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result: ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
