const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user is on home");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("user is on about");
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
