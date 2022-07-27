// MODULES
// in CommonJS, every file in node is a module (by default)
// Modules  - blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. (we only share what we want)

const { sasche, paola } = require("./4-name");
const names = require("./4-name");
const sayHi = require("./5-utils");
let data = require("./6-alternative-flavor").singlePerson;
// data = data.singlePerson;
// console.log("🚀 ~ file: 3-modules.js ~ line 9 ~ data", data);

// require("./7-mind-grenade");

sayHi(`${sasche}, \'destructured\'`);
sayHi(`${paola}, \'destructured\'`);
sayHi(`${names.sasche}, \'property names\'`);
sayHi("Jose, 'function + string assign'");
sayHi(`${data.name}`);
