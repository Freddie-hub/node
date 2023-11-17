const os = require('os');

//get user info
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name:os.type(),
  release:os.release(),
  totalmemory:os.type(),
  freememory:os.freemem(),
}
console.log(currentOs);