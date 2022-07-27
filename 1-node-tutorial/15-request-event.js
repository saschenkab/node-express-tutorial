const http = require("http");

// const server = http.createSever((req, res) => {
//     res.end("Welcome")
// })

// using Event Emitter API
const server = http.createServer();
//emits request event
// subscribe to it / listen for it / respond to it

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
