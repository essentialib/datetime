const { Datetime, TimeDelta } = require('./datetime');

const d1 = new Datetime(2023, 9, 14);
const d2 = new Date(2023, 8, 14);
const i = new Datetime(1970, 1, 1);
// d1 - d2 = datetime.timedelta(days=6411, seconds=53022, microseconds=700022)
// 553963422700.022

console.log(d1.sub(i).toNumber(), d2.getTime());
console.log(new TimeDelta({ millisecond: d2.getTime() }))
// console.log(d1.sub(d2));
// console.log(Datetime.leapYears(2023) - Datetime.leapYears(2006));
// console.log(Datetime.leapYears(2006));  // 486
// console.log(Datetime.leapYears(2024));  // 491
// 2008 2012 2016 2020 2024