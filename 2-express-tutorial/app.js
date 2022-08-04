const express = require("express");
let { people } = require("./data");
const server = express();

// static assets

server.use(express.static("./methods-public"));

// parse form data
server.use(express.urlencoded({ extended: false }));
// This is a built-in middleware funtion in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

server.use(express.json());

server.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

server.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please, provide a name" });
  }
  res.status(201).json({ success: true, person: name });
});

server.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please provide a credential");
});

server.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ sucess: true, data: newPerson });
});

server.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` });
  }

  const newPerson = people.filter(
    (person) => person.id !== Number(req.params.id)
  );

  return res.status(200).json({ success: true, data: newPerson });
});

server.listen(5000, () => {
  console.log("Server started on port 5000🌐");
});
