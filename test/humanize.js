const { DateTime } = require('../src');

humanize = strings => console.log(DateTime.parse(strings[0]).humanize());

// humanize`내일 점심`
// humanize`내일 정오`
// humanize`내일 오후 3시`
// humanize`내일 오후 3시 4분`
// humanize`어제 저녁`
// humanize`어제 오후 3시 4초`
// humanize`그제 18시 29분`
