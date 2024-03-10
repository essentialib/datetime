const { DateTime, Date, Time, $D } = require('../src');

// describe('DateTime', () => {
//     let dt;

//     beforeEach(() => {
//         dt = new DateTime();
//     });

//     test('get date', () => {
//         expect(dt.getDate()).toBeInstanceOf(Date);
//     });
// });

// let dt = new DateTime();
// console.log(dt.toString());
// dt.date = new Date(2026, 2, 24);
// console.log(dt.toString());
// dt.time = new Time(15, 30, 0, 0);
// console.log(dt.toString());
// dt.year = 3026;
// console.log(dt.toString());
// dt.month = 5;
// console.log(dt.toString());
// dt.day = 15;
// console.log(dt.toString());
// dt.hour = 5;
// console.log(dt.toString());
// console.log(dt.timestamp(), new $D(dt.timestamp()));
// console.log(dt.humanize());
// console.log(dt.toNumber())
// console.log(dt.toDate())
// console.log(dt.toObject(), dt.toDate().getDay())
// console.log(DateTime.fromTimestamp(dt.timestamp()).toString())

// let dt = DateTime.now();
// console.log(dt.add({ year: 3 }).toString());
// console.log(dt.toString())
// console.log(dt.subtract({ year: 3 }).toString());
// console.log(dt.weekday)
// console.log(dt.weekdayName)
// console.log(DateTime.dehumanize('3년 전').toString())

// let dt = DateTime.now().subtract({ day: 3 });
// while (!(dt = dt.add({ day: 1 })).isToday()) {
// 	console.log(dt.toString());
// }

// let dt = DateTime.today();
// let tomorrow = DateTime.tomorrow();
// console.log(dt.eq(tomorrow));
// console.log(dt.lt(tomorrow));
//
// console.log(dt.lengthOfMonth(), dt.lengthOfYear(), dt.isLeapYear());
// console.log(dt.isWeekend(), dt.isWeekday());

// python 의 calendar.leapdays() 함수와 결과를 비교
// years = [
// 	[2020, 2024],
// 	[2020, 2025],
// 	[2020, 2052],
// 	[2020, 3025],
// 	[2020, 1025],
// 	[2020, 2020],
// 	[2021, 2024],
// 	[2021, 2025]
// ]
//
// for (let year of years)
// 	console.log(DateTime.leapYearCount(year[0], year[1]));

console.log(DateTime.today().toString('M월 D일'), DateTime.sunday().toString('M월 D일'));