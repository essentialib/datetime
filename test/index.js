const { DateTime, Date, Time } = require('../src');

const now = DateTime.now();
const tomorrow = now.add({ day: 2 });

console.log(now.toString());
console.log(tomorrow.toString());
console.log(now.toString());