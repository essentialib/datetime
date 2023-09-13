const { Datetime } = require('./datetime');

const d1 = Datetime.now();
const d2 = new Datetime(2006, 2, 24, 7, 30, 56);
console.log(`d1: ${d1}`);
console.log(`d2: ${d2}`);
console.log(`age: ${d1.sub(d2)}`);

console.log((new Date()).getTime() - (new Date(2006, 3, 24, 7, 30, 56)).getTime());
