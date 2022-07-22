// GLOBALS - NO WINDOW

//  __dirname  - path to current directory
// __filename  - file name
// require     - funtion to use modules (Common JS)
// module      - info about current module (file)
// process     - info about enviroment where the program is being executed

// console.log(`This is the path of the current directory `, __dirname);
// console.log(`This is the file name `, __filename);
// console.log(`This is a function to use modules`, require);
// console.log(`This is the info about the current module(file)`, module);
// console.log(`This is the info about the enviroment of the program`, process);

//The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
setInterval(() => {
  console.log(`Hello world`);
}, 1000);

//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
setTimeout(() => {
  console.log(`Bye world`);
}, 5000);
