const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Annyeong, Welcome!");
  } else if (request.url === "/about") {
    response.end("LACHIBOLALA");
  } else {
    response.end(
      `<h1>Oops!</h1> <p>Kookie is not here<p> <a href='/'>Back to kookie</a>`
    );
  }
});

server.listen(5000);
