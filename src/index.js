const { Datetime } = require('./datetime');

// 553963422700.022
const d1 = Datetime.today();
const d2 = new Datetime(2006, 2, 24, 7, 30, 56);
const d1_2 = new Date(2023, 8, 14);
const d2_2 = new Date(2006, 1, 24, 7, 30, 56);
// fixme: 이 오차는 무엇?
console.log(`datetime: ${d1.sub(d2)}`);
console.log(`date: ${d1_2.getTime() - d2_2.getTime()}`);

// console.log(Datetime.now().toString());