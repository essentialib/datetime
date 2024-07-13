# datetime

카카오톡 봇 전용 날짜 관리 라이브러리.  
바닐라 JS의 굉장히 열악한 Date 객체의 단점을 보완하고 편리하게 만든 Wrapper 클래스인 DateTime으로 사용 가능합니다.

## How to use

레포지토리에서 DateTime 폴더를 모듈 폴더에 넣고 다음과 같이 사용할 수 있습니다.
```js
const bot = BotManager.getCurrentBot();
const { DateTime } = require("DateTime");

function onMessage(msg) {
   if (msg.content.startsWith("parse ")) {
      const content = msg.content.substr(6);
      const dt = DateTime.parse(content);
      msg.reply(dt.toString());
   }
}
bot.addListener(Event.MESSAGE, onMessage);
```

> [!IMPORTANT]
> DateTime 모듈 폴더의 globalization 폴더의 경로를 명시해야합니다. 기본값은 'msgbot/global_modules/DateTime/globalization' 입니다.
```js
const { DateTime } = require("DateTime")
DateTime.globalizationPath = "(globalization 폴더 경로명)";
```

## Features

[d.ts](https://github.com/essentialib/datetime/blob/main/src/index.d.ts) 파일을 통해 자세하게 확인 가능합니다. 주석과 타입 힌트를 모두 지원합니다.

**주요한 기능들**

<details>
  <summary> DateTime.parse: 문자열에서 날짜를 추출합니다. (한국어만 인식 가능) </summary>

  ```js
  parse`새벽 3시`    // ✅
  parse`오전 4시`    // ✅
  parse`오후 7:15`  // ✅
  parse`4시`   // ✅
  parse`11시`  // ✅
  parse`3월 4일`    // ✅
  parse`3월 4일 7시 15분`   // ✅
  parse`3월 9일 오전 7시 3초`   // ✅
  parse`18시 34초`   // ✅
  parse`다음 날` // ✅
  parse`담날`   // ✅
  parse`다음 주` // ✅
  parse`담주` // ✅
  parse`저번 주` // ✅
  parse`저번주`  // ✅
  parse`지난주`  // ✅
  parse`지난 주 금요일` // ✅
  parse`지난주 수요일`  // ✅
  parse`3주 후` // ✅
  parse`다음 달` // ✅
  parse`1달 후` // ✅
  parse`다음 해` // ✅
  parse`1년 후` // ✅
  parse`저번 주 일요일`  // ✅
  parse`다음 주 월요일`	// ✅
  parse`다다음 주`    // ✅
  parse`다다음 주 일요일`    // ✅
  parse`일요일`  // ✅
  parse`토요일`    // ✅
  parse`이번 주 일요일` // ✅
  parse`저저저번주일요일` // ✅
  parse`이번 해` // ✅
  parse`이번 주` // ✅
  parse`오늘`   // ✅
  parse`어제`   // ✅
  parse`내일`   // ✅
  parse`낼`   // ✅
  parse`모레`   // ✅
  parse`글피`    // ✅
  parse`그글피`   // ✅
  parse`그그글피`  // ✅
  parse`그제`   // ✅
  parse`그저께`  // ✅
  parse`그끄저께` // ✅
  parse`그그끄저께`    // ✅
  parse`3시간 후`    // ✅
  parse``   // ✅
  parse`5시간 13분 8초 후`    // ✅
  parse`4시간 3분 이전`    // ✅
  parse`아침`    // ✅
  parse`정오`    // ✅
  parse`점심`    // ✅
  parse`저녁`    // ✅
  parse`자정`    // ✅
  parse`9시`;   // ✅
  parse`12시`;  // ✅
  parse`금요일 밥`;    // ✅
  parse`3월 13일 7시 3초 급식`;  // ✅
  parse`3/4`;	// ✅
  parse`3-4`;	// ✅
  parse`2024/3/21`;	// ✅
  parse`2024.3.21`;	// ✅
  parse`2024-3-21`;	// ✅
  parse`이번주 일요일`	// ✅
  parse`이번주 일요일`	// ✅
  parse`이번주 일요일까지`	// ✅
  
  // 기준 날짜에서 다시 parse
  datetime = DateTime.parse('이번주 일요일');
  console.log(datetime.toString());
  console.log(datetime.parse('3일 후').toString());	// 이번주 일요일에서 3일 후 ✅

  // getString 인자 사용
  DateTime.parse('내일 3시에 미팅', true, true)  // 첫 번째 인자는 getString, 두 번째 인자는 filterIncludeEnding
  // => { parse: DateTime('2024년 7월 14일 오후 3:00:00'), string: '미팅' }
  ```
</details>

<details>
  <summary> DateTime.parseDuration: 문자열에서 날짜 구간을 추출합니다. (한국어만 인식 가능) </summary>

  ```js
  parseDuration`내일 3시부터 5시까지 미팅`;  // ✅
  parseDuration`모레 6시부터 9시 스터디`; // ✅
  parseDuration`다음주 화요일 9시부터 10시까지 병원 방문`; // ✅
  ```
</details>

<details>
  <summary> DateTime.toString: 날짜를 문자열로 변환합니다. </summary>
  
  - `s`: 초 (e.g. 0, 1, ..., 59)
  - `ss`: 2자리 초 (e.g. 00, 01, ..., 59)
  - `sss`: 밀리초 (e.g. 000, 001, ..., 999)
  - `m`: 분 (e.g. 0, 1, ..., 59)
  - `mm`: 2자리 분 (e.g. 00, 01, ..., 59)
  - `h`: 시 (e.g. 0, 1, ..., 12)
  - `hh`: 2자리 시 (e.g. 00, 01, ..., 12)
  - `i`: 시 (e.g. 0, 1, ..., 23)
  - `ii`: 2자리 시 (e.g. 00, 01, ..., 23)
  - `t`: 오전/오후 (e.g. 오전, 오후)
  - `D`: 일 (e.g. 1, 2, ..., 31)
  - `DD`: 2자리 일 (e.g. 01, 02, ..., 31)
  - `W`: 짧은 요일 (e.g. 일, 월, ..., 토)
  - `WW`: 긴 요일 (e.g. 일요일, 월요일, ..., 토요일)
  - `M`: 월 (e.g. 1, 2, ..., 12)
  - `MM`: 2자리 월 (e.g. 01, 02, ..., 12)
  - `MMM`: 짧은 월 (e.g. Jan, Feb, ..., Dec) **한국어는 동일**
  - `MMMM`: 긴 월 (e.g. January, February, ..., December) **한국어는 동일**
  - `YY`: 2자리 연도 (e.g. 70, 71, ..., 24) 
  - `YYYY`: 4자리 연도 (e.g. 1970, 1971, ..., 2024)

  ```js
  DateTime.now().toString()
  // => "2024년 1월 1일 오후 3:30:00"
  DateTime.now().toString('YYYY-MM-DD hh:mm:ss.sss')
  // => "2024-01-01 15:30:00.000"
  ```
</details>

<details>
  <summary> DateTime.humanize: 날짜를 좀 더 친숙하게 문자열로 변환합니다. </summary>

  ```js
  DateTime.now().add({ hour: 4, minute: 30 }).humanize()
  // => "4시간 30분 후'
  DateTime.now().add({ day: 7, hour: 4 }).humanize(true) // 첫 번째 인자는 ignoreTime
  // => 다음 주 토요일
  ```
</details>
