const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  // by default, eventListeners are invoked in the order they are added
  console.log(`data received ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "sasche", 22);
