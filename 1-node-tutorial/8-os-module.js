const os = require("os"); // OperatingSystem built-in module

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log("🚀 ~ file: app.js ~ line 15 ~ currentOS", currentOS);
