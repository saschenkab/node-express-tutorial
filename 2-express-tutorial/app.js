const http = require("http");

const server = http.createServer((request, response) => {
  console.log("User is in the server");
  response.end("Home Page");
});

server.listen(5000, console.log("Server running on port: 5000"));
