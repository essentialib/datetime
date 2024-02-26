const { DateTime, Date, Time } = require('../src');

todo = strings => {
	const parsed = DateTime.parseWithFilteredString(strings[0]);
	console.log(`${parsed[0].humanize()} | "${parsed[1]}"`);
};

todo`낼모레 할 일 정리하기`;
todo`내일 3시에 미팅`;
todo`다음주 화요일 연세세브란스 방문 9시 10분`
todo`내일 아침 쿠팡에서 온 택배 가져오기`