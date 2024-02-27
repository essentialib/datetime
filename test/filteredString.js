const { DateTime, Date, Time } = require('../src');

todo = strings => {
	const { parse, string } = DateTime.parseWithFilteredString(strings[0]);
	console.log(`${parse?.humanize()}\n|> "${string}"`);
};

todo`낼모레 할 일 정리하기`;
todo`내일 3시에 미팅`;
todo`다음주 화요일 연세세브란스 방문 9시 10분`;
todo`내일 아침 쿠팡에서 온 택배 가져오기`;
todo`좀 있다가 택배 문 앞에서 가져오기`;
todo`내일 아침 9시에 회사에 출근하기`;
todo`3월 4일 7시에 미팅`;