const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");

const server = express();

// request => middleware => response

// MIDDLEWARES  -- The middleware in node.js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
//  Middleware literally means anything you put in the middle of one layer of the software and another. Express middleware are functions that execute during the lifecycle of a request to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it's attached to.

//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.

// 1. use vs route
// 2. options - our own / express / third party

// server.use([logger, authorize]);

server.get("/", (req, res) => {
  res.send("Home");
});
server.get("/about", (req, res) => {
  res.send("About");
});
server.get("/api/products", (req, res) => {
  res.send("Products");
});
server.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

server.listen(5000, () => {
  console.log("Server started on port 5000");
});
