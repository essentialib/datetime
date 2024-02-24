const { DateTime, Date, Time } = require('../src');

const now = DateTime.now();
console.log(now.toString('s.sss'));
now.set({ second: 2 });
console.log(now.toString('s.sss'));