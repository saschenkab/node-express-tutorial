// const { readFileSync } = require("fs");
const http = require("http");

// // GET ALL FILES
// const navBar = readFileSync("/index.html");

const server = http.createServer((request, response) => {
  const url = request.url;

  // HOME PAGE
  if (url === "/") {
    response
      .writeHead(200, { "content-type": "text/html" })
      .write("<h1>Home Page</h1>");
    response.end();
  }
  // ABOUT PAGE
  else if (url === "/about") {
    response
      .writeHead(200, { "content-type": "text/html" })
      .write("<h1>About Page</h1>");
    response.end();
  }
  // 404 NOT FOUND
  else {
    response
      .writeHead(404, { "content-type": "text/html" })
      .write(
        "<h1>Sorry, this page doesn't exist</h1><p>Go back to the Home Page <a href='/'>HERE</a></p>"
      );
    response.end();
  }
});

server.listen(5000, console.log("Server running on port: 5000"));
