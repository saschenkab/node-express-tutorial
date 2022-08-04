const express = require("express");
const path = require("path");
const server = express();

// setup static and middleware
server.use(express.static("./public"));

// server.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

server.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

server.listen(5000, () => {
  console.log("Server started on port 5000");
});
