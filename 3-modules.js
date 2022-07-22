// MODULES
// in CommonJS, every file in node is a module (by default)
// Modules  - blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. (we only share what we want)

const { sasche, paola } = require("./4-name");
const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi(`${sasche}, \'destructured\'`);
sayHi(`${paola}, \'destructured\'`);
sayHi(`${names.sasche}, \'property names\'`);
sayHi("Jose, 'function + string assign'");
