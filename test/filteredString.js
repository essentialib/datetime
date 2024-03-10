const { DateTime, Date, Time } = require('../src');

f = strings => {
	const { parse, string } = DateTime.parseWithFilteredString(strings[0]);
	console.log(`${parse?.humanize()}\n|> "${string}"`);
};

fd = strings => {
	const { parse, string } = DateTime.parseDurationWithFilteredString(strings[0]);
	console.log(`${parse?.from.humanize()} ~ ${parse?.to.humanize()}\n|> "${string}"`);
};

f`낼모레 할 일 정리하기`;
f`내일 3시에 미팅`;
f`다음 주 월요일 연세세브란스 방문 9시 10분`;
f`내일 아침 쿠팡에서 온 택배 가져오기`;
f`좀 있다가 택배 문 앞에서 가져오기`;
f`내일 아침 9시에 회사에 출근하기`;
f`다다다음주 미팅`;

fd`내일 3시부터 5시까지 미팅`;  // ✅
fd`모레 6시부터 9시 스터디`; // ✅
fd`다음주 화요일 9시부터 10시까지 연세세브란스 방문`; // ✅