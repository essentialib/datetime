const { DateTime } = require('../src');

humanize = strings => console.log(DateTime.parse(strings[0]).humanize());
humanizeIg = strings => console.log(DateTime.parse(strings[0]).humanize(true));

humanize`내일 점심`
humanizeIg`내일 6시간 후`
humanize`내일 정오`
humanize`내일 오후 3시`
humanize`내일 오후 3시 4분`
humanize`어제 저녁`
humanize`어제 오후 3시 4초`
humanize`그제 18시 29분`

console.log(DateTime.now().add({ hour: 4, minute: 30 }).humanize());
console.log(DateTime.now().add({ day: 7, hour: 4 }).humanize(true));
