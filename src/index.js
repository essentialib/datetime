const IS_DIST = false;

let $D = !IS_DIST ? global.Date : Date;

class Duration {
	constructor(millisecond) {
		this._amount = millisecond;
	}
	
	get amount() {
		return this._amount;
	}
	
	set amount(value) {
		this._amount = value;
	}
	
	get millisecond() {
		return this.amount % 1000;
	}
	
	get second() {
		return Math.floor(this.amount / 1000) % 86400;
	}
	
	get day() {
		return Math.floor(this.amount / 86400000);
	}
	
	toString() {
		return `duration(day=${this.day}, second=${this.second}, millisecond=${this.millisecond})`;
	}
}

class Date {
	constructor(year, month, day) {
		this._source = new $D(year, month - 1, day);
	}
	
	get year() {
		return this._source.getFullYear();
	}
	
	get month() {
		return this._source.getMonth() + 1;
	}
	
	get day() {
		return this._source.getDate();
	}
	
	toString() {
		return `date(year=${this.year}, month=${this.month}, day=${this.day})`;
	}
	
	toObject() {
		return {
			year: this.year,
			month: this.month,
			day: this.day
		};
	}
}

class Time {
	constructor(hour, minute, second, millisecond) {
		this._source = new $D();
		this._source.setHours(hour);
		this._source.setMinutes(minute);
		this._source.setSeconds(second);
		this._source.setMilliseconds(millisecond);
	}
	
	get hour() {
		return this._source.getHours();
	}
	
	get minute() {
		return this._source.getMinutes();
	}
	
	get second() {
		return this._source.getSeconds();
	}
	
	get millisecond() {
		return this._source.getMilliseconds();
	}
	
	toString() {
		return `time(hour=${this.hour}, minute=${this.minute}, second=${this.second}, millisecond=${this.millisecond})`;
	}
	
	toObject() {
		return {
			hour: this.hour,
			minute: this.minute,
			second: this.second,
			millisecond: this.millisecond
		};
	}
}

class DateTime {
	constructor(datetimeObject, locale) {
		this._source = new $D();
		this._locale = locale ?? 'ko-KR';
		
		if (datetimeObject instanceof $D) {
			this._source = datetimeObject;
		}
		else if (datetimeObject !== undefined) {
			let dt;
			
			if (datetimeObject instanceof DateTime)
				dt = datetimeObject;
			else if (typeof datetimeObject === 'number')
				dt = DateTime.fromNumber(datetimeObject);
			else if (typeof datetimeObject === 'object' && !Array.isArray(datetimeObject))
				dt = DateTime.fromObject(datetimeObject);
			else if (typeof datetimeObject === 'string')
				dt = DateTime.fromString(datetimeObject, this._locale);
			else
				throw new TypeError('`datetimeObject` must be $D, datetime, number, object, or string');
			
			this._source = dt._source;
			this._locale = dt._locale;
		}
	}
	
	get date() {
		return new Date(this._source.getFullYear(), this._source.getMonth() + 1, this._source.getDate());
	}
	
	set date(dateObject) {
		if (!(dateObject instanceof Date))
			throw new TypeError('`date` must be date');
		
		this._source.setFullYear(dateObject.year ?? this._source.getFullYear());
		this._source.setMonth((dateObject.month - 1) ?? this._source.getMonth());
		this._source.setDate(dateObject.day ?? this._source.getDate());
	}
	
	get time() {
		return new Time(this._source.getHours(), this._source.getMinutes(), this._source.getSeconds(), this._source.getMilliseconds());
	}
	
	set time(timeObject) {
		if (!(timeObject instanceof Time))
			throw new TypeError('`time` must be time');
		
		this._source.setHours(timeObject.hour ?? this._source.getHours());
		this._source.setMinutes(timeObject.minute ?? this._source.getMinutes());
		this._source.setSeconds(timeObject.second ?? this._source.getSeconds());
		this._source.setMilliseconds(timeObject.millisecond ?? this._source.getMilliseconds());
	}
	
	get year() {
		return this._source.getFullYear();
	}
	
	set year(value) {
		this._source.setFullYear(value);
	}
	
	get month() {
		return this._source.getMonth() + 1;
	}
	
	set month(value) {
		this._source.setMonth(value - 1);
	}
	
	get day() {
		return this._source.getDate();
	}
	
	set day(value) {
		this._source.setDate(value);
	}
	
	get weekday() {
		return this._source.getDay();
	}
	
	get weekdayName() {
		const cultureInfo = IS_DIST
			? JSON.parse(FileStream.read(`/sdcard/msgbot/global_modules/datetime/globalization/${this.locale}.json`))
			: require(`./globalization/${this.locale}.json`);
		
		if (!cultureInfo)
			throw new Error('Invalid locale, not found ' + this.locale);

		return cultureInfo['WW'][this.weekday];
	}
	
	get hour() {
		return this._source.getHours();
	}
	
	set hour(value) {
		this._source.setHours(value);
	}
	
	get minute() {
		return this._source.getMinutes();
	}
	
	set minute(value) {
		this._source.setMinutes(value);
	}
	
	get second() {
		return this._source.getSeconds();
	}
	
	set second(value) {
		this._source.setSeconds(value);
	}
	
	get millisecond() {
		return this._source.getMilliseconds();
	}
	
	set millisecond(value) {
		this._source.setMilliseconds(value);
	}
	
	get locale() {
		return this._locale;
	}
	
	set locale(value) {
		this._locale = value;
	}
	
	timestamp() {
		return this._source.getTime();
	}
	
	toString(formatString) {
		const cultureInfo = IS_DIST
			? JSON.parse(FileStream.read(`/sdcard/msgbot/global_modules/datetime/globalization/${this.locale}.json`))
			: require(`./globalization/${this.locale}.json`);
		
		if (!cultureInfo)
			throw new Error('Invalid locale, not found ' + this.locale);
		
		formatString = formatString ?? cultureInfo['formats']['full'];
		return formatString.replace(/ss?s?|mm?|hh?|ii?|t|DD?|WW?|MM?M?M?|YY(?:YY)?/g, match => {
			switch (match) {
				case 's':
					return this.second;
				case 'ss':
					return this.second.toString().padStart(2, '0');
				case 'sss':
					return this.millisecond;
				case 'm':
					return this.minute;
				case 'mm':
					return this.minute.toString().padStart(2, '0');
				case 'h':
					return this.hour === 12 ? 12 : this.hour % 12;
				case 'hh':
					return (this.hour === 12 ? 12 : this.hour % 12).toString().padStart(2, '0');
				case 'i':
					return this.hour;
				case 'ii':
					return this.hour.toString().padStart(2, '0');
				case 't':
					return cultureInfo['t'][this.hour < 12 ? 0 : 1];
				case 'D':
					return this.day;
				case 'DD':
					return this.day.toString().padStart(2, '0');
				case 'W':
					return cultureInfo['W'][this.weekday];
				case 'WW':
					return cultureInfo['WW'][this.weekday];
				case 'M':
					return this.month;
				case 'MM':
					return this.month.toString().padStart(2, '0');
				case 'MMM':
					return cultureInfo['MMM'][this.month - 1];
				case 'MMMM':
					return cultureInfo['MMMM'][this.month - 1];
				case 'YY':
					return this.year % 100;
				case 'YYYY':
					return this.year;
				default:
					throw new Error(`unknown format ${match}`);
			}
		});
	}

	humanize() {
		// TODO: implement
	}
	
	toNumber() {
		return this.timestamp();
	}
	
	toDate() {
		return this._source;
	}
	
	toObject() {
		return {
			year: this.year,
			month: this.month,
			day: this.day,
			weekday: this.weekday,
			hour: this.hour,
			minute: this.minute,
			second: this.second,
			millisecond: this.millisecond
		};
	}
	
	static fromTimestamp(timestamp) {
		return DateTime.fromNumber(timestamp);
	}
	
	static fromString(dateString, locale) {
		return DateTime.parse(dateString, locale);
	}

	static dehumanize(dateString, locale) {
		return DateTime.parse(dateString, locale);
	}
	
	static fromNumber(timestamp) {
		return DateTime.fromDate(new $D(timestamp));
	}
	
	static fromDate(date) {
		let dt = new DateTime();
		dt._source = date;
		
		return dt;
	}
	
	static fromObject(datetimeObject, standard=undefined) {
		const now = new DateTime();
		
		const ret = {};
		ret.year = datetimeObject.year;
		ret.month = datetimeObject.month;
		ret.day = datetimeObject.day;
		ret.hour = datetimeObject.hour;
		ret.minute = datetimeObject.minute;
		ret.second = datetimeObject.second;
		ret.millisecond = datetimeObject.millisecond;
		
		const defaults = {
			year: (standard ? (standard.year ?? now.year) : now.year),
			month: (standard ? (standard.month ?? now.month) : 1),
			day: (standard ? (standard.day ?? now.day) : 1),
			hour: (standard ? (standard.hour ?? now.hour) : 0),
			minute: (standard ? (standard.minute ?? now.minute) : 0),
			second: (standard ? (standard.second ?? now.second) : 0),
			millisecond: (standard ? (standard.millisecond ?? now.millisecond) : 0)
		}
		
		const units = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
		
		/**
		 * "오전 6시" 는 year, month, day는 현재 or 기준(standard)으로, hour는 6, minute, second, millisecond는 0으로 정해지는 것이 합당하다.
		 * 아래의 코드는 if (year == null) else if (month == null) ... else if (millisecond == null) 에 대해 각각 for 문으로
		 * 전의 unit을 기준(standard)의 값으로, 후의 unit을 시작으로 지정하는 코드다.
		 */
		for (let unit of units) {
			if (ret[unit] != null) {
				let x = units.indexOf(unit);
				for (let i = 0; i < x; i++)
					ret[units[i]] ??= now[units[i]];
				for (let i = x; i < units.length; i++)
					ret[units[i]] ??= defaults[units[i]];
				
				break;
			}
		}
		
		console.log(ret);    // FIXME: debug
		
		if (ret.year % 1 !== 0) {
			ret.month += ret.year % 1 * 12;
			ret.year = ret.year >= 0 ? Math.floor(ret.year) : Math.ceil(ret.year);
		}
		
		if (ret.month % 1 !== 0) {
			ret.day += ret.month % 1 * DateTime.lengthOfMonth(ret.year, Math.floor(ret.month));
			ret.month = ret.month >= 0 ? Math.floor(ret.month) : Math.ceil(ret.month);
		}
		
		if (ret.day % 1 !== 0) {
			ret.hour += ret.day % 1 * 24;
			ret.day = ret.day >= 0 ? Math.floor(ret.day) : Math.ceil(ret.day);
		}
		
		if (ret.hour % 1 !== 0) {
			ret.minute += ret.hour % 1 * 60;
			ret.hour = ret.hour >= 0 ? Math.floor(ret.hour) : Math.ceil(ret.hour);
		}
		
		if (ret.minute % 1 !== 0) {
			ret.second += ret.minute % 1 * 60;
			ret.minute = ret.minute >= 0 ? Math.floor(ret.minute) : Math.ceil(ret.minute);
		}
		
		if (ret.second % 1 !== 0) {
			ret.millisecond += ret.second % 1 * 1000;
			ret.second = ret.second >= 0 ? Math.floor(ret.second) : Math.ceil(ret.second);
		}
		
		if (ret.millisecond % 1 !== 0)
			throw new Error('millisecond must be integer');
		
		return DateTime.set(ret);
	}
	
	add(datetimeObject) {
		if (datetimeObject instanceof Duration) {
			let dt = this.toDate();
			dt.setMilliseconds(dt.getMilliseconds() + datetimeObject.amount);
			return new DateTime(dt, this.locale);
		}
		else {
			let dt = this.toDate();
			dt.setFullYear(dt.getFullYear() + (datetimeObject.year ?? 0));
			dt.setMonth(dt.getMonth() + (datetimeObject.month ?? 0));
			dt.setDate(dt.getDate() + (datetimeObject.day ?? 0));
			dt.setDate(dt.getDate() + 7 * (datetimeObject.week ?? 0));
			dt.setHours(dt.getHours() + (datetimeObject.hour ?? 0));
			dt.setMinutes(dt.getMinutes() + (datetimeObject.minute ?? 0));
			dt.setSeconds(dt.getSeconds() + (datetimeObject.second ?? 0));
			dt.setMilliseconds(dt.getMilliseconds() + (datetimeObject.millisecond ?? 0));
			return new DateTime(dt, this.locale);
		}
	}
	
	sub(datetimeObject) {
		if (datetimeObject instanceof DateTime)
			return new Duration(this.timestamp() - datetimeObject.timestamp());
		else if (datetimeObject instanceof Duration) {
			let dt = this.toDate();
			dt.setMilliseconds(dt.getMilliseconds() - datetimeObject.amount);
			return new DateTime(dt, this.locale);
		}
		else {
			let dt = this.toDate();
			dt.setFullYear(dt.getFullYear() - (datetimeObject.year ?? 0));
			dt.setMonth(dt.getMonth() - (datetimeObject.month ?? 0));
			dt.setDate(dt.getDate() - (datetimeObject.day ?? 0));
			dt.setDate(dt.getDate() - 7 * (datetimeObject.week ?? 0));
			dt.setHours(dt.getHours() - (datetimeObject.hour ?? 0));
			dt.setMinutes(dt.getMinutes() - (datetimeObject.minute ?? 0));
			dt.setSeconds(dt.getSeconds() - (datetimeObject.second ?? 0));
			dt.setMilliseconds(dt.getMilliseconds() - (datetimeObject.millisecond ?? 0));
			return new DateTime(dt, this.locale);
		}
	}
	
	set(datetimeObject) {
		if (datetimeObject instanceof DateTime) {
			this._source = datetimeObject.toDate();
		}
		else if (datetimeObject instanceof Date) {
			this._source.setFullYear(datetimeObject.year ?? this._source.getFullYear());
			this._source.setMonth((datetimeObject.month - 1) ?? this._source.getMonth());
			this._source.setDate(datetimeObject.day ?? this._source.getDate());
		}
		else if (datetimeObject instanceof Time) {
			this._source.setHours(datetimeObject.hour ?? this._source.getHours());
			this._source.setMinutes(datetimeObject.minute ?? this._source.getMinutes());
			this._source.setSeconds(datetimeObject.second ?? this._source.getSeconds());
			this._source.setMilliseconds(datetimeObject.millisecond ?? this._source.getMilliseconds());
		}
		else {
			this._source.setFullYear(datetimeObject.year ?? this._source.getFullYear());
			this._source.setMonth((datetimeObject.month - 1) ?? this._source.getMonth());
			this._source.setDate(datetimeObject.day ?? this._source.getDate());
			this._source.setHours(datetimeObject.hour ?? this._source.getHours());
			this._source.setMinutes(datetimeObject.minute ?? this._source.getMinutes());
			this._source.setSeconds(datetimeObject.second ?? this._source.getSeconds());
			this._source.setMilliseconds(datetimeObject.millisecond ?? this._source.getMilliseconds());
		}
	}
	
	eq(datetimeObject) {
		const other = new DateTime(datetimeObject, this.locale);
		return this.timestamp() === other.timestamp();
	}
	
	neq(datetimeObject) {
		return !this.eq(datetimeObject);
	}
	
	ge(datetimeObject) {
		const other = new DateTime(datetimeObject, this.locale);
		return this.timestamp() >= other.timestamp();
	}
	
	gt(datetimeObject) {
		const other = new DateTime(datetimeObject, this.locale);
		return this.timestamp() > other.timestamp();
	}
	
	le(datetimeObject) {
		const other = new DateTime(datetimeObject, this.locale);
		return this.timestamp() <= other.timestamp();
	}
	
	lt(datetimeObject) {
		const other = new DateTime(datetimeObject, this.locale);
		return this.timestamp() < other.timestamp();
	}
	
	static at(hour, minute, second, millisecond) {
		const date = new $D();
		date.setHours(hour);
		date.setMinutes(minute ?? 0);
		date.setSeconds(second ?? 0);
		date.setMilliseconds(millisecond ?? 0);
		
		return new DateTime(date);
	}
	
	static in(year) {
		return new DateTime(new $D(year, 0, 1));
	}
	
	static on(month, day) {
		day = day ?? 1;
		
		return new DateTime(new $D(new $D().getFullYear(), month - 1, day));
	}
	
	static set(datetimeObject) {
		let year = datetimeObject.year ?? new $D().getFullYear();
		let month = datetimeObject.month ?? 1;
		let day = datetimeObject.day ?? 1;
		let hour = datetimeObject.hour ?? 0;
		let minute = datetimeObject.minute ?? 0;
		let second = datetimeObject.second ?? 0;
		let millisecond = datetimeObject.millisecond ?? 0;
		
		return new DateTime(new $D(year, month - 1, day, hour, minute, second, millisecond));
	}
	
	static parse(dateString, locale = 'ko-KR') {
		return DateTime.fromObject(...DateTime._parse(dateString, locale));
	}
	
	static _parse(dateString, locale = 'ko-KR') {
		// sanitize dateString
		// '  2020년  3월  2일  ' -> '2020년 3월 2일'
		dateString = dateString.trim().replace(/\s+/g, ' ');
		
		const cultureInfo = IS_DIST
			? JSON.parse(FileStream.read(`/sdcard/msgbot/global_modules/datetime/globalization/${locale}.json`))
			: require(`./globalization/${locale}.json`);
		
		if (!cultureInfo)
			throw new Error('Invalid locale, not found ' + locale);
		
		const isNumberRegex = /^[+-]?\d+(?:\.\d*)?$/;
		const isRelativeObject = obj => obj.constructor === Object && 'diff' in obj && typeof obj.diff === 'number' && Object.keys(obj).length === 1;
		const isHomonymObject = obj => obj.constructor === Object && 'homonym' in obj && Array.isArray(obj.homonym) && Object.keys(obj).length === 1;
		
		const keywords = {
			units: new Set([ 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond' ]),
			meridiems: new Set([ 'am', 'pm' ]),
			weekdays: new Set([ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]),
			times: new Set([ 'morning', 'noon', 'afternoon', 'evening', 'night', 'midnight' ]),
			counts: new Set([ 'th', 'half', 'end' ]),
			relative: new Set([ 'ago', 'after' ]),
			standard: new Set(['from', 'of']),
		};
		
		const homonyms = new Set(Object.keys(cultureInfo.translate).map(k => isHomonymObject(cultureInfo.translate[k]) ? k : null).filter(e => e !== null));
		
		// 1. parse ISO 8601 format
		const parse1 = () => {
			const RE_ISO = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minute>\d{2}):(?<second>\d{2})(?:\.(?<millisecond>\d{3}))?Z$/;
			const isoMatch = dateString.match(RE_ISO);
			
			if (isoMatch) {
				return {
					year: isoMatch.groups.year,
					month: isoMatch.groups.month,
					day: isoMatch.groups.day,
					hour: isoMatch.groups.hour,
					minute: isoMatch.groups.minute,
					second: isoMatch.groups.second,
					millisecond: isoMatch.groups.millisecond
				};
			}
		};
		
		// 2. parse common date format
		const parse2 = () => {
			let meridiem = 'pm';
			
			for (let key in cultureInfo.translate) {
				if (keywords.meridiems.has(cultureInfo.translate[key])) // am, pm이 value인 key들
					meridiem = cultureInfo.translate[key];
			}
			
			const RE_DATE = /(?:(?<year>\d{4})[-.\/])? *(?<month>\d{1,2})[-.\/] *(?<day>\d{1,2})\.?/;
			const RE_TIME = /(?<hour>\d{1,2}):(?<minute>\d{1,2})(?::(?<second>\d{1,2})(?:\.(?<millisecond>\d{1,3}))?)?/;
			
			const dateMatch = dateString.match(RE_DATE);
			const timeMatch = dateString.match(RE_TIME);
			
			if (dateMatch || timeMatch) {
				let year = dateMatch?.groups?.year;
				let month = dateMatch?.groups?.month;
				let day = dateMatch?.groups?.day;
				let hour = timeMatch?.groups?.hour;
				let minute = timeMatch?.groups?.minute;
				let second = timeMatch?.groups?.second;
				let millisecond = timeMatch?.groups?.millisecond;
				
				if (hour !== undefined && hour < 12 && meridiem === 'pm')
					hour += 12;
				
				return { year, month, day, hour, minute, second, millisecond };
			}
		};
		
		// 3. analyze in tokens
		const parse3 = () => {
			let standard = {};
			
			// sort by length (desc), then by dictionary order (asc)
			// desc로 정렬하기 때문에, '매주' 와 '주' 에서 '매주'에 먼저 매칭될 수 있게 함.
			const keys = Object.keys(cultureInfo.translate);
			keys.sort((a, b) => a.length !== b.length ? b.length - a.length : a.localeCompare(b));
			
			// tokenize dateString
			// '2020년 3월 2일 12시 34분 56초' -> [2020, 'year', 3, 'month', 2, 'day', 12, 'hour', 34, 'minute', 56, 'second']
			const getTokens = dstr => {
				let startIdx = 0;
				let chucks = [];
				let found = false;
				let foundBefore = false;
				
				while (startIdx < dstr.length) {
					foundBefore = found;
					found = false;
					
					for (let key of keys) {
						if (dstr.startsWith(key, startIdx)) {
							let value = cultureInfo.translate[key];
							
							if (chucks.length >= 1 && typeof chucks[chucks.length - 1] === 'number' && typeof value === 'number') {
								// 십이 -> [10, 2] -> 10+2
								// 이십 -> [2, 10] -> 2*10
								if (chucks[chucks.length - 1] > value)
									chucks[chucks.length - 1] += value;
								else
									chucks[chucks.length - 1] *= value;
							}
							else if (chucks.length >= 1 && isRelativeObject(chucks[chucks.length - 1]) && isRelativeObject(value)) {
								// 다음 내일 -> [{diff: 1}, {diff: 2}] -> {diff: 1+2}
								// 내일 다음 -> [{diff: 2}, {diff: 1}] -> {diff: 2+1}
								
								chucks[chucks.length - 1].diff += value.diff;
							}
							else if (Array.isArray(value))
								chucks.push(...value);
							else
								chucks.push(value);
							
							startIdx += key.length;
							found = true;
							
							break;
						}
					}
					
					if (!found) {
						if (chucks.length === 0)
							chucks.push('');
						
						if (foundBefore)
							chucks.push(dstr[startIdx++]);
						else
							chucks[chucks.length - 1] += dstr[startIdx++];
					}
				}
				
				return chucks.map(e => isNumberRegex.test(e) ? parseFloat(e) : e);
			};
			
			let splited = dateString.split(' ').map(getTokens).flat();
			let tokens = [];
			
			/**
			 * 공백이 없는 문자열에서의 토큰들끼리는 잘 merge 되었으나, 공백이 없는 문자열들끼리의 토큰들끼리의 merge를 처리해야함.
			 * ex. 다음 다음다음 날 -> [다음, 다음다음, 날] -> [{diff: 1}, {diff: 2}, 'day'] -> [{diff: 1+2}, 'day']
			 * 위의 예시에서 1+2를 하는 작업을 아래 코드에서 수행함.
			 */
			while (splited.length > 0) {
				let value = splited.shift();
				
				if (tokens.length >= 1 && typeof tokens[tokens.length - 1] === 'number' && typeof value === 'number') {
					if (tokens[tokens.length - 1] > value)
						tokens[tokens.length - 1] += value;
					else
						tokens[tokens.length - 1] *= value;
				}
				else if (tokens.length >= 1 && isRelativeObject(tokens[tokens.length - 1]) && isRelativeObject(value)) {
					tokens[tokens.length - 1].diff += value.diff;
				}
				else if (Array.isArray(value))
					tokens.push(...value);
				else
					tokens.push(value);
			}
			
			console.log(tokens);    // FIXME: debug
			
			// 세 시간 반 -> 3.5시간
			for (let i = 2; i < tokens.length; i++) {
				if (keywords.units.has(tokens[i - 1]) &&
					keywords.counts.has(tokens[i]) &&
					tokens[i] === 'half' &&
					typeof tokens[i - 2] === 'number'
				) {
					tokens[i - 2] += 0.5;
					tokens.splice(i, 1);
					i--;
				}
			}
			
			// [3.5, '시간', '뒤'] -> [{ diff: 3.5 }, '시간']
			let i = 0;
			while (i < tokens.length) {
				if (keywords.relative.has(tokens[i])) {
					if (!standard)
						standard = DateTime.now();
					
					const multiplier = tokens[i] === 'ago' ? -1 : 1;
					
					for (let j = i - 1; j >= 0; j--) {
						if (keywords.standard.has(tokens[j]))
							break;
						
						let diff;
						
						if (typeof tokens[j] === 'number')
							diff = tokens[j] * multiplier;
						else if (isRelativeObject(tokens[j]))
							diff = tokens[j].diff * multiplier;
						
						if (diff !== undefined)
							tokens[j] = { diff };
					}
					
					tokens.splice(i, 1);
					i = -1;
				}
				i++;
			}
			
			// [2022, 'year', 3, 'month', 2, 'day', 12, 'hour', 34, 'minute', 56, 'second']
			const absoluteParse = () => {
				const dateObject = {};
				let meridiem = 'pm';
				
				for (let i = 0; i < tokens.length; i++) {
					let token = tokens[i];
					
					if (keywords.units.has(token)) {    // year, month, week, day, hour, minute, second, millisecond 감지
						if (cultureInfo['isTurnReversed'] === false) {   // 한국어처럼 '2022년' 과 같이 뒤에 단위가 붙는 경우
							if (typeof tokens[i - 1] === 'number') {
								dateObject[token] = tokens[i - 1];
							}
							// else
							// 	throw new Error(`invalid format: { dateObject[${token}]: ${tokens[i - 1]} }`);
						}
						else {    // 영어처럼 'year 2022' 와 같이 앞에 단위가 붙는 경우
							if (typeof tokens[i + 1] === 'number')
								dateObject[token] = tokens[i + 1];
							// else
							// 	throw new Error(`invalid format: { dateObject[${token}]: ${tokens[i + 1]} }`);
						}
					}
					else if (keywords.meridiems.has(token)) {
						meridiem = token;
					}
					else if ('hour' in dateObject) {
						if (keywords.meridiems.has(token))    // am, pm
							meridiem = token;
						
						if (dateObject['hour'] < 12 && meridiem === 'pm')
							dateObject['hour'] += 12;
					}
				}
				
				return dateObject;
			};
			
			// [3, 'year', 'ago']
			const relativeParse = () => {
				const dateObject = {};
				let standard_now = DateTime.now();
				
				for (let i = 0; i < tokens.length; i++) {
					let token = tokens[i];
					
					if (keywords.standard.has(token)) {     // 3월 3일로부터
						standard = DateTime._parse(tokens.slice(0, i).join(' '), locale)[0];
						standard_now = DateTime.fromObject(standard);
					}
					else if (keywords.counts.has(token)) {    // [half] week, [end] month, 11 [th] month, 11 [th] sunday, ...
						tokens[i + 1] ??= 'millisecond';    // 2023년의 마지막 -> 2023년 12월 31일 23시 59분 59초 999밀리초
						
						if (keywords.units.has(tokens[i + 1]) || keywords.weekdays.has(tokens[i + 1])) {
							let tokenFront = tokens[i - 1]; // 11, 3, 1, ...
							// token;  // th, half, end
							let tokenBack = tokens[i + 1];  // month, week, day, sunday, ...
							
							let amount;
							if (token === 'half')
								amount = length => Math.floor(length / 2);
							else if (token === 'th') {
								if (typeof tokenFront !== 'number')
									throw new Error(`invalid format: "${tokenFront} th"`);
								amount = length => Math.min(tokenFront, length);
							}
							else if (token === 'end')
								amount = length => length;
							
							switch (tokenBack) {
								case 'year': {
									if (token === 'half')
										dateObject['day'] = amount(DateTime.lengthOfYear(dateObject['year'] ?? standard_now.year));
									else
										throw new Error('invalid format: "th/end 해"');
									
									dateObject['hour'] = 0;
									dateObject['minute'] = 0;
									dateObject['second'] = 0;
									dateObject['millisecond'] = 0;
									break;
								}
								case 'month': {
									if (token === 'half') {
										dateObject['day'] = amount(DateTime.lengthOfMonth(dateObject['year'] ?? standard_now.year, dateObject['month'] ?? standard_now.month));
										dateObject['hour'] = 0;
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									else {
										dateObject['month'] = amount(12);
										dateObject['day'] = 1;
										dateObject['hour'] = 0;
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									break;
								}
								case 'week': {
									if (token === 'half') {
										dateObject['day'] = standard_now.day + (amount(7) - standard_now.weekday + 7) % 7;
										dateObject['hour'] = 0;
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									else {
										dateObject['day'] = standard_now.day + (0 - dateObject['weekday'] + 7) % 7;
										let lengthOfMonth = DateTime.lengthOfMonth(dateObject['year'] ?? standard_now.year, dateObject['month'] ?? standard_now.month);
										
										// 만약 23일이 일요일이라면 16, 9, 2일이 셋째주, 둘째주, 셋째주가 됨
										// 23 % 7 == 2 이므로 2일이 첫주의 시작이 되어야 함
										// 이 달의 길이가 31일이라면 (31 - 2) // 7 == 4 이므로 4주차가 됨 (2, 9, 16, 23, 30)
										let first = dateObject['day'] % 7;
										let weeks = [ first ];
										for (let i = first + 7; i <= lengthOfMonth; i += 7)
											weeks.push(i);
										
										dateObject['day'] = weeks[amount(weeks.length)];
										dateObject['hour'] = 0;
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									break;
								}
								case 'day': {
									if (token === 'half') {
										dateObject['hour'] = amount(24);
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									// else if (token === 'end') {
									//
									// }
									else {  // th
										dateObject['day'] = amount(DateTime.lengthOfMonth(dateObject['year'] ?? standard_now.year, dateObject['month'] ?? standard_now.month));
										dateObject['hour'] = 0;
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									break;
								}
								case 'hour': {
									if (token === 'half') {
										dateObject['minute'] = amount(60);
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									else {
										dateObject['hour'] = amount(24);
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									break;
								}
								case 'minute': {
									if (token === 'half') {
										dateObject['second'] = amount(60);
										dateObject['millisecond'] = 0;
									}
									else {
										dateObject['minute'] = amount(60);
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
									break;
								}
								case 'second': {
									if (token === 'half') {
										dateObject['millisecond'] = amount(1000);
									}
									else {
										dateObject['second'] = amount(60);
										dateObject['millisecond'] = 0;
									}
									break;
								}
								case 'millisecond': {
									if (token === 'half')
										throw new Error('invalid format: "half 밀리초"');
									else
										dateObject['millisecond'] = amount(1000);
									break;
								}
								default: {  // weekday
									if (token === 'half')
										throw new Error('invalid format: "half 요일"');
									else {
										dateObject['day'] = standard_now.day + (DateTime.getWeekDayFromName(tokenBack, locale = 'en-US') - standard_now.weekday + 7) % 7;
										let lengthOfMonth = DateTime.lengthOfMonth(dateObject['year'] ?? standard_now.year, dateObject['month'] ?? standard_now.month);
										
										let first = dateObject['day'] % 7;
										let weeks = [ first ];
										for (let i = first + 7; i <= lengthOfMonth; i += 7)
											weeks.push(i);
										
										dateObject['day'] = weeks[amount(weeks.length)];
										dateObject['hour'] = 0;
										dateObject['minute'] = 0;
										dateObject['second'] = 0;
										dateObject['millisecond'] = 0;
									}
								}
							}
						}
					}
					else if (keywords.times.has(token)) {
						dateObject['minute'] = 0;
						dateObject['second'] = 0;
						dateObject['millisecond'] = 0;
						
						if (token === 'morning')
							dateObject['hour'] = 9;
						else if (token === 'noon')
							dateObject['hour'] = 12;
						else if (token === 'afternoon')
							dateObject['hour'] = 15;
						else if (token === 'evening')
							dateObject['hour'] = 18;
						else if (token === 'night')
							dateObject['hour'] = 21;
						else if (token === 'midnight') {
							dateObject['hour'] = 0;
							dateObject['day'] = dateObject['day'] ?? standard_now.day + 1;
						}
					}
					else if (isRelativeObject(token)) {
						if (keywords.units.has(tokens[i + 1])) {
							dateObject[tokens[i + 1]] = standard_now[tokens[i + 1]] + token.diff;
						}
					}
				}
				
				return dateObject;
			};
			
			const absolute = absoluteParse();
			const relative = relativeParse();
			const result = Object.assign(absolute, relative);
			
			if (Object.keys(result).length > 0)
				return [result, standard];
		};
		
		let parsed = parse1() ?? parse2();
		
		if (parsed !== undefined)
			return [parsed, undefined];
		else {
			let parsed = parse3();
			
			if (parsed !== undefined)
				return parsed;
			else
				throw new Error('Invalid date string: ' + dateString);
		}
	}
	
	static now() {
		return new DateTime(new $D());
	}
	
	static today() {
		const now = new $D();
		return new DateTime(new $D(now.getFullYear(), now.getMonth(), now.getDate()));
	}
	
	static tomorrow() {
		const now = new $D();
		return new DateTime(new $D(now.getFullYear(), now.getMonth(), now.getDate() + 1));
	}
	
	static yesterday() {
		const now = new $D();
		return new DateTime(new $D(now.getFullYear(), now.getMonth(), now.getDate() - 1));
	}
	
	static sunday() {
		const diff = (0 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static monday() {
		const diff = (1 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static tuesday() {
		const diff = (2 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static wednesday() {
		const diff = (3 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static thursday() {
		const diff = (4 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static friday() {
		const diff = (5 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static saturday() {
		const diff = (6 - new $D().getDay() + 7) % 7;
		return DateTime.today().add({ day: diff });
	}
	
	static january(day) {
		day = day ?? 1;
		return new DateTime({ month: 1, day: day });
	}
	
	static february(day) {
		day = day ?? 1;
		return new DateTime({ month: 2, day: day });
	}
	
	static march(day) {
		day = day ?? 1;
		return new DateTime({ month: 3, day: day });
	}
	
	static april(day) {
		day = day ?? 1;
		return new DateTime({ month: 4, day: day });
	}
	
	static may(day) {
		day = day ?? 1;
		return new DateTime({ month: 5, day: day });
	}
	
	static june(day) {
		day = day ?? 1;
		return new DateTime({ month: 6, day: day });
	}
	
	static july(day) {
		day = day ?? 1;
		return new DateTime({ month: 7, day: day });
	}
	
	static august(day) {
		day = day ?? 1;
		return new DateTime({ month: 8, day: day });
	}
	
	static september(day) {
		day = day ?? 1;
		return new DateTime({ month: 9, day: day });
	}
	
	static october(day) {
		day = day ?? 1;
		return new DateTime({ month: 10, day: day });
	}
	
	static november(day) {
		day = day ?? 1;
		return new DateTime({ month: 11, day: day });
	}
	
	static december(day) {
		day = day || 1;
		return new DateTime({ month: 12, day: day });
	}
	
	static isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}
	
	static leapYearCount(start, end) {
		const l = y => Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
		
		return l(end) - l(start) + (DateTime.isLeapYear(start) ? 1 : 0);    // [start, end]
	}
	
	static lengthOfMonth(year, month) {
		return [ 0, 31, (DateTime.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][month];
	}
	
	static lengthOfYear(year) {
		return DateTime.isLeapYear(year) ? 366 : 365;
	}
	
	static getWeekDayFromName(weekDayName, locale = 'ko-KR') {
		const cultureInfo = IS_DIST
			? JSON.parse(FileStream.read(`/sdcard/msgbot/global_modules/datetime/globalization/${locale}.json`))
			: require(`./globalization/${locale}.json`);
		
		if (!cultureInfo)
			throw new Error('Invalid locale, not found ' + locale);
		
		let ret = cultureInfo['W'].map(e => e.toLowerCase()).indexOf(weekDayName.toLowerCase());
		if (ret === -1)
			ret = cultureInfo['WW'].map(e => e.toLowerCase()).indexOf(weekDayName.toLowerCase());
		if (ret === -1)
			throw new Error('Invalid weekDayName, not found ' + weekDayName);
		
		return ret;
	}
	
	isLeapYear() {
		return DateTime.isLeapYear(this.year);
	}
	
	isWeekend() {
		return this.weekday === 0 || this.weekday === 6;
	}
	
	isWeekday() {
		return !this.isWeekend();
	}
	
	isToday() {
		const now = new $D();
		return this.year === now.getFullYear() && this.month === now.getMonth() + 1 && this.day === now.getDate();
	}
	
	lengthOfMonth() {
		return [ 0, 31, (this.isLeapYear() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][this.month];
	}
	
	lengthOfYear() {
		return this.isLeapYear() ? 366 : 365;
	}
}

// TODO: implement

class Parser {
	constructor(locale='ko-KR') {
		this.locale = locale;
		this.cultureInfo = IS_DIST
			? JSON.parse(FileStream.read(`/sdcard/msgbot/global_modules/datetime/globalization/${locale}.json`))
			: require(`./globalization/${locale}.json`);
		
		if (!this.cultureInfo)
			throw new Error('Invalid locale, not found ' + locale);
		
		this.replaces = this.cultureInfo.replaces;
		this.keywords = this.cultureInfo.keywords;
	}
	
	normalization(dateString) {
		let ret = dateString.trim().replace(/\s+/g, ' ');
		
		for (let [ key, value ] of Parser.objectLoop(this.replaces)) {
			if (Parser.isRepeatObject(value)) {
				const i = new Parser.RepeatToken(key, value);
				if (i.key.test(ret))
					ret = i.replace(ret);
			}
			else if (Parser.isContinueObject(value)) {
				const i = new Parser.ContinueToken(key, value);
				if (i.key.test(ret))
					ret = i.replace(ret);
			}
			else
				ret = ret.replaceAll(key, value);
		}
		
		return ret;
	}
	
	getTokensInNonSpace(dateString) {
		let startIdx = 0;
		let chucks = [];
		let found = false;
		let foundBefore = false;
		
		let dict = {};
		for (let keyword in this.keywords) {
			for (let key in this.keywords[keyword]) {
				if (key in dict)
					dict[key] = { meanings: [ dict[key], this.keywords[keyword][key] ] };
				else
					dict[key] = this.keywords[keyword][key];
			}
		}
		
		while (startIdx < dateString.length) {
			foundBefore = found;
			found = false;
			
			for (let [ key, value ] of Parser.objectLoop(dict)) {
				if (dateString.startsWith(key, startIdx)) {
					
					if (chucks.length >= 1 && typeof chucks[chucks.length - 1] === 'number' && typeof value === 'number') {
						// 십이 -> [10, 2] -> 10+2
						// 이십 -> [2, 10] -> 2*10
						if (chucks[chucks.length - 1] > value)
							chucks[chucks.length - 1] += value;
						else
							chucks[chucks.length - 1] *= value;
					}
					else if (chucks.length >= 1 && Parser.isDiffObject(chucks[chucks.length - 1]) && Parser.isDiffObject(value)) {
						// 다음 내일 -> [{diff: 1}, {diff: 2}] -> {diff: 1+2}
						// 내일 다음 -> [{diff: 2}, {diff: 1}] -> {diff: 2+1}
						
						chucks[chucks.length - 1].diff += value.diff;
					}
					else if (Array.isArray(value))
						chucks.push(...value);
					else
						chucks.push(value);
					
					startIdx += key.length;
					found = true;
					
					break;
				}
			}
			
			if (!found) {
				if (chucks.length === 0)
					chucks.push('');
				
				if (foundBefore)
					chucks.push(dateString[startIdx++]);
				else
					chucks[chucks.length - 1] += dateString[startIdx++];
			}
		}
		
		return chucks.map(e => Parser.isNumberRegex.test(e) ? parseFloat(e) : e);
	}
	
	getTokens(dateString) {
		let notMerged = dateString.split(' ').map(this.getTokensInNonSpace);
		
		let tokens = [];
		
		/**
		 * 공백이 없는 문자열에서의 토큰들끼리는 잘 merge 되었으나, 공백이 없는 문자열들끼리의 토큰들끼리의 merge를 처리해야함.
		 * ex. 다음 다음다음 날 -> [다음, 다음다음, 날] -> [{diff: 1}, {diff: 2}, 'day'] -> [{diff: 1+2}, 'day']
		 * 위의 예시에서 1+2를 하는 작업을 아래 코드에서 수행함.
		 */
		while (notMerged.length > 0) {
			let value = notMerged.shift();
			
			if (tokens.length >= 1 && typeof tokens[tokens.length - 1] === 'number' && typeof value === 'number') {
				if (tokens[tokens.length - 1] > value)
					tokens[tokens.length - 1] += value;
				else
					tokens[tokens.length - 1] *= value;
			}
			else if (tokens.length >= 1 && Parser.isDiffObject(tokens[tokens.length - 1]) && Parser.isDiffObject(value)) {
				tokens[tokens.length - 1].diff += value.diff;
			}
			else if (Array.isArray(value))
				tokens.push(...value);
			else
				tokens.push(value);
		}
		
		return tokens;
	}
	
	parse_ISO(dateString) {
		const m = dateString
			.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minute>\d{2}):(?<second>\d{2})(?:\.(?<millisecond>\d{3}))?Z$/);
		
		if (m) {
			return {
				year: m.groups.year,
				month: m.groups.month,
				day: m.groups.day,
				hour: m.groups.hour,
				minute: m.groups.minute,
				second: m.groups.second,
				millisecond: m.groups.millisecond
			};
		}
	}
	
	parse_common(dateString) {
		const date = dateString
			.match(/(?:(?<year>\d{4})[-.\/])? *(?<month>\d{1,2})[-.\/] *(?<day>\d{1,2})\.?/);
		const time = dateString
			.match(/(?<hour>\d{1,2}) *: *(?<minute>\d{1,2})(?: *: *(?<second>\d{1,2})(?:\.(?<millisecond>\d{1,3}))?)?/);
		
		if (date || time) {
			return {
				year: date?.groups?.year,
				month: date?.groups?.month,
				day: date?.groups?.day,
				hour: time?.groups?.hour,
				minute: time?.groups?.minute,
				second: time?.groups?.second,
				millisecond: time?.groups?.millisecond
			};
		}
	}
	
	parse_absolute(dateString) {
	
	}
	
	parse_relative(dateString) {
	
	}
	
	parse(dateString) {
		dateString = this.normalization(dateString);
		let tokens = this.getTokens(dateString);
		
		let parsed = this.parse_ISO(dateString) ?? this.parse_common(dateString);
		parsed ??= Object.assign(this.parse_absolute(dateString), this.parse_relative(dateString));
		
		if (parsed !== undefined)
			return parsed;
		else
			throw new Error('Invalid date string: ' + dateString);
	}
	
	static isNumberRegex = /^[+-]?\d+(?:\.\d*)?$/;
	
	static Token = class {
		constructor(key, obj) {
			this.key = new RegExp(key, 'g');
		}
		
		replace(str) {
			return 'Not implemented';
		}
	};
	
	static isContinueObject(obj) {
		return obj.constructor === Object
			&& 'offset' in obj
			&& typeof obj.offset === 'number'
			&& 'tail' in obj
			&& typeof obj.tail === 'string'
			&& Object.keys(obj).length === 2;
	}
	
	static ContinueToken = class extends Parser.Token {
		constructor(key, obj) {
			if (!Parser.isContinueObject(obj))
				throw new Error();
			
			super(key, obj);
			
			this.offset = obj.offset;
			this.tail = obj.tail;
		}
		
		replace(str) {
			return str.replace(this.key, (m, g) => {
				return `${this.offset + g.length}${this.tail}`;
			})
		}
	}
	
	static isRepeatObject(obj) {
		return obj.constructor === Object
			&& 'repeat' in obj
			&& typeof obj.repeat === 'string'
			&& Object.keys(obj).length === 1;
	}
	
	static RepeatToken = class extends Parser.Token {
		constructor(key, obj) {
			if (!Parser.isRepeatObject(obj))
				throw new Error();
			
			super(key, obj);
			
			this.repeat = obj.repeat;
		}
		
		/**
		 * @example (저+)번: 저저번 그래도 -> 저번 저번 그래도
		 */
		replace(str) {
			return str.replace(this.key, (m, g) => {
				return Array(g.length).fill(this.repeat).join(' ');
			});
		}
	}
	
	static isDiffObject(obj) {
		return obj.constructor === Object
			&& 'diff' in obj
			&& typeof obj.diff === 'number'
			&& Object.keys(obj).length === 1;
	}
	
	static isHomonymObject(obj) {
		return obj.constructor === Object
			&& 'meanings' in obj
			&& Array.isArray(obj.meanings)
			&& Object.keys(obj).length === 1;
	}
	
	static objectLoop(obj) {
		const keys = Object.keys(obj);
		
		// 키들의 길이로 정렬하기 때문에, '매주' 와 '주' 에서 '매주'에 먼저 매칭될 수 있게 함.
		// continue, repeat token들은 길이가 훨씬 길어질 수 있으므로(ex. 저저저저저저번) 가장 우선순위를 높임.
		keys.sort((a, b) => {
			if (a.includes('+') && !b.includes('+'))
				return -1;
			if (!a.includes('+') && b.includes('+'))
				return 1;
			return a.length !== b.length ? b.length - a.length : a.localeCompare(b);
		});
		
		return keys.map(k => [k, obj[k]]);
	}
}

/**
 * @param {string} string
 *
 *
 */
const _getToken = (string) => {

};

/**
 * @param {string} dateString
 * @param {string} [locale='ko-KR']
 *
 *
 */
const _parse = (dateString, locale='ko-KR') => {

};

exports.DateTime = DateTime;
exports.Date = Date;
exports.Time = Time;
exports.Duration = Duration;
exports.Parser = Parser;
exports.$D = $D;