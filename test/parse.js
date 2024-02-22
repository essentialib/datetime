const { DateTime, Date, Time } = require('../src');

parse = string => {
	console.log(string[0]);
	const parsed = DateTime.parse(string[0]);
	console.log(parsed.toString('YYYY-MM-DD t hh:mm:ss.sss WW'));
};

// parse`새벽 3시`    // ✅
// parse`오전 4시`    // ✅
// parse`오후 7:15`  // ✅
// parse`4시`   // ✅
// parse`11시`  // ✅
// parse`3월 4일`    // ✅
// parse`3월 4일 7시`   // ✅
// parse`3월 4일 7시 15분`   // ✅
// parse`3월 4일 오전 7시 15분 30초`   // ✅

// parse`다음 날` // ✅
// parse`담날`   // ✅
// parse`다음 주` // ✅
// parse`담주` // ✅
// parse`1주 후` // ✅
// parse`다음 달` // ✅
// parse`1달 후` // ✅
// parse`다음 해` // ✅
// parse`1년 후` // ✅
// parse`다음 주 일요일` // ✅, 주일을 일월화수목금토 가 아니라 월화수목금토일 로 해서 '다음 주 일요일'을 보다 평상시 표현으로 사용할 수 있게 함.
// parse`저번 주 일요일`  // ✅
// parse`다다음 주`    // ✅
// parse`다다음 주 일요일`    // ✅
// parse`일요일`  // ✅
// parse`일`    // ✅
// parse`이번 주 일요일` // ✅
// parse`저저저번주일요일` // ✅
// parse`이번 해` // ✅
// parse`이번 주` // ✅
// parse`이번 달` // ✅
// parse`이번 주 일요일` // ✅

// parse`오늘`   // ✅
// parse`어제`   // ✅
// parse`내일`   // ✅
// parse`낼`   // ✅
// parse`모레`   // ✅
// parse`글피`    // ✅
// parse`그글피`   // ✅
// parse`그그글피`  // ✅
// parse`그제`   // ✅
// parse`그저께`  // ✅
// parse`그끄저께` // ✅
// parse`그그끄저께`    // ✅

// parse`3시간 후`    // ✅
// parse``   // ✅
// parse`5시간 13분 8초 후`    // ✅
// parse`4시간 3분 이전`    // ✅

// parse`아침`    // ✅, TODO: 아침 지나고 테스트
// parse`정오`    // ✅, TODO: 아침 지나고 테스트
// parse`점심`    // ✅, TODO: 아침 지나고 테스트
// parse`저녁`    // ✅, TODO: 아침 지나고 테스트
// parse`자정`    // ✅, TODO: 아침 지나고 테스트