const { readFile } = require("fs");

readFile("./content/first.txt", "utf-8", (error, data) => {
  if (error) {
    return;
  } else {
    console.log(data);
  }
});
