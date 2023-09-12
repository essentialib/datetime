const Datetime = require('./datetime');

const d1 = Datetime.now();
const d2 = new Datetime(2006, 2, 24, 7, 30, 56);
console.log(`age: ${d1.sub(d2)}`);
