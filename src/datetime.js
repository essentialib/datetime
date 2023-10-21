const information = {
    months: [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapMonths: [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    isLeapYear: (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

const propertyGetSet = (that, key, getter, setter) => {
    Object.defineProperty(that, key, {
        get: getter,
        set: setter
    });
};

const propertyGet = (that, key, getter) => {
    Object.defineProperty(that, key, {
        get: getter,
        configurable: false
    });
};

/**
 * @property week
 * @property day
 * @property hour
 * @property minute
 * @property second
 * @property millisecond
 * @return {TimeDelta}
 * @constructor
 */
function TimeDelta( day, hour, minute, second, millisecond) {
    if (!(this instanceof TimeDelta)) {
        throw new TypeError('TimeDelta must be called with new');
    }

    if (arguments.length === 1) {
        if (arguments[0] instanceof TimeDelta) {
            const date = arguments[0];

            this.day = date.day;
            this.hour = date.hour;
            this.minute = date.minute;
            this.second = date.second;
            this.millisecond = date.millisecond;
        }
        else if (typeof arguments[0] === 'object' && !Array.isArray(arguments[0]) && arguments[0] != null) {
            const date = arguments[0];

            this.day = date.day || 0;
            this.hour = date.hour || 0;
            this.minute = date.minute || 0;
            this.second = date.second || 0;
            this.millisecond = date.millisecond || 0;
        }
        else {
            throw new TypeError('TimeDelta constructor argument must be TimeDelta, object');
        }
    }
    else {
        this.day = day || 0;
        this.hour = hour || 0;
        this.minute = minute || 0;
        this.second = second || 0;
        this.millisecond = millisecond || 0;
    }

    let amount = (((this.day * 24 + this.hour) * 60 + this.minute) * 60 + this.second) * 1000 + this.millisecond;

    this.millisecond = amount % 1000;
    amount = Math.floor(amount / 1000);
    this.second = amount % 60;
    amount = Math.floor(amount / 60);
    this.minute = amount % 60;
    amount = Math.floor(amount / 60);
    this.hour = amount % 24;
    amount = Math.floor(amount / 24);
    this.day = amount;
}

TimeDelta = Object.assign(TimeDelta, {
});

TimeDelta.prototype = {
    toString() {
        let ret = 'TimeDelta(';

        if (this.day) ret += `day=${this.day}, `;
        if (this.hour) ret += `hour=${this.hour}, `;
        if (this.minute) ret += `minute=${this.minute}, `;
        if (this.second) ret += `second=${this.second}, `;
        if (this.millisecond) ret += `millisecond=${this.millisecond}, `;

        return (ret.endsWith('(') ? ret : ret.slice(0, -2)) + ')';
    },

    toNumber() {
        return (((this.day * 24 + this.hour) * 60 + this.minute) * 60 + this.second) * 1000 + this.millisecond;
    }
};

/**
 * @property year
 * @property month
 * @property day
 * @property hour
 * @property minute
 * @property second
 * @property millisecond
 * @returns {Datetime}
 */
function Datetime(year, month, day, hour, minute, second, millisecond) {
    if (!(this instanceof Datetime)) {
        throw new TypeError('Datetime must be called with new');
    }

    if (arguments.length === 1) {
        if (arguments[0] instanceof Date) {
            const date = arguments[0];

            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
            this.weekday = date.getDay();
            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
            this.millisecond = date.getMilliseconds();
        }
        else if (arguments[0] instanceof Datetime) {
            const date = arguments[0];

            this.year = date.year;
            this.month = date.month;
            this.day = date.day;
            this.weekday = date.weekday;
            this.hour = date.hour;
            this.minute = date.minute;
            this.second = date.second;
            this.millisecond = date.millisecond;
        }
        else if (typeof arguments[0] === 'object' && !Array.isArray(arguments[0]) && arguments[0] != null) {
            const date = arguments[0];

            this.year = date.year || 1;
            this.month = date.month || 1;
            this.day = date.day || 1;
            this.hour = date.hour || 0;
            this.minute = date.minute || 0;
            this.second = date.second || 0;
            this.millisecond = date.millisecond || 0;
        }
        else {
            throw new TypeError('Datetime constructor argument must be Date, Datetime, object');
        }
    }
    else {
        this.year = year || 1;
        this.month = month || 1;
        this.day = day || 1;
        this.hour = hour || 0;
        this.minute = minute || 0;
        this.second = second || 0;
        this.millisecond = millisecond || 0;
    }

    if (!('weekday' in this)) {
        propertyGet(this, 'weekday', () => {
            // doomsday algorithm
            const century = Math.floor(this.year / 100);
            const year = this.year % 100;
            const baseWeekDays = [2, 0, 5, 3]
            const baseWeekDay = baseWeekDays[century % 4];
            const a = Math.floor(year / 12);
            const b = year % 12;
            const c = Math.floor(b / 4);
            const doomsDay = (baseWeekDay + a + b + c) % 7;
            const sameDays = [
                null,
                3 + (information.isLeapYear(this.year) ? 1 : 0),
                28 + (information.isLeapYear(this.year) ? 1 : 0),
                0, 4, 9, 6, 11, 8, 5, 10, 7, 12
            ];
            const plusDay = (this.day - sameDays[this.month]) % 7;

            return (doomsDay + plusDay + 7) % 7;
        });
    }

    const monthDays = information.isLeapYear(this.year) ? information.leapMonths : information.months;
    const monthDay = monthDays[this.month];

    if (this.millisecond >= 1000) {
        this.second += Math.floor(this.millisecond / 1000);
        this.millisecond %= 1000;
    }

    if (this.second >= 60) {
        this.minute += Math.floor(this.second / 60);
        this.second %= 60;
    }

    if (this.minute >= 60) {
        this.hour += Math.floor(this.minute / 60);
        this.minute %= 60;
    }

    if (this.hour >= 24) {
        this.day += Math.floor(this.hour / 24);
        this.hour %= 24;
    }

    if (this.day > monthDay) {
        for (let i = this.month; this.day > monthDays[i]; i = i % 12 + 1) {
            this.day -= monthDays[i];
            this.month += 1;
        }
    }

    if (this.month > 12) {
        this.year += Math.floor(this.month / 12);
        this.month %= 12;
    }
}

Datetime = Object.assign(Datetime, {
    /**
     * @param {String} text
     * @returns {Datetime}
     */
    parse(text) {
        // todo: parse text
        // '그그끄저께'
        // '그끄저께'
        // '그저께'
        // '어제'
        // '오늘'
        // '내일'
        // '모레'
        // '글피'
        // '그글피'
        // '그그글피'
        // '그그그글피'
        // '1일 후'
        // '+1일'
        // '1일 뒤'
        // '1일 후에'
        // '1일 뒤에'

        return new Datetime(2023, 9, 12, 14, 32, 15);
    },

    /**
     * @returns {Datetime}
     */
    now() {
        return new Datetime(new Date());
    },

    today() {
        const date = new Date();
        return new Datetime(date.getFullYear(), date.getMonth() + 1, date.getDate());
    },

    /**
     * [0, year) 범위의 윤년 개수 반환
     * todo: 구현이 확실하지 않음.
     * @param year
     * @return {number}
     */
    leapYears(year) {
        if (year <= 0) {
            throw new RangeError('year must be positive');
        }

        year--;
        return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
    },

    /**
     * [year1, year2) 범위의 윤년 개수 반환
     * todo: 구현이 확실하지 않음.
     * @param year1
     * @param year2
     * @return {number}
     */
    leapBetweenYears(year1, year2) {
        return Datetime.leapYears(year2) - Datetime.leapYears(year1);
    }
});

Datetime.prototype = {
    toString(format) {
        format ||= 'ko-KR';

        let isFormatCode = /[a-z]{2}-[A-Z]{2}/.test(format);
        let globalCode = isFormatCode ? format : 'ko-KR'
        const cultureInfo = require(`./globalization/${globalCode}.json`);
        format = isFormatCode ? cultureInfo['formats']['full'] : format;

        return format.replace(/ss?s?|mm?|hh?|ii?|t|DD?|WW?|MM?M?M?|YY?/g, (match) => {
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
                case 'Y':
                    return this.year % 100;
                case 'YY':
                    return this.year;
                default:
                    throw new Error(`unknown format ${match}`);
            }
        });
    },

    toNumber() {
        return ((((this.year * 365 + this.day + Datetime.leapYears(this.year)) * 24 + this.hour) * 60 + this.minute) * 60 + this.second) * 1000 + this.millisecond;
    },

    isLeapYear() {
        return information.isLeapYear(this.year);
    },

    monthRange() {
        return information.isLeapYear(this.year) ? information.leapMonths[this.month] : information.months[this.month];
    },

    set(object) {
        if (!(typeof object === 'object' && !Array.isArray(object) && object != null)) {
            throw new TypeError('set argument must be object');
        }

        if ('year' in object)
            this.year = object.year;
        if ('month' in object)
            this.month = object.month;
        if ('day' in object)
            this.day = object.day;
        if ('hour' in object)
            this.hour = object.hour;
        if ('minute' in object)
            this.minute = object.minute;
        if ('second' in object)
            this.second = object.second;
        if ('millisecond' in object)
            this.millisecond = object.millisecond;
    },

    /**
     *
     * @param {TimeDelta} timeDelta
     * @returns {Datetime}
     */
    add(timeDelta) {
        if (!(timeDelta instanceof TimeDelta)) {
            throw new TypeError('add argument must be TimeDelta');
        }

        return new Datetime(
            this.year,
            this.month,
            this.day + timeDelta.day + 7 * timeDelta.week,
            this.hour + timeDelta.hour,
            this.minute + timeDelta.minute,
            this.second + timeDelta.second,
            this.millisecond + timeDelta.millisecond
        );
    },

    /**
     *
     * @param {Datetime} datetime
     * @returns {TimeDelta}
     */
    sub(datetime) {
        if (!(datetime instanceof Datetime)) {
            throw new TypeError('sub argument must be Datetime');
        }

        return new TimeDelta({ millisecond: this.toNumber() - datetime.toNumber() });
    }
};

module.exports = { Datetime, TimeDelta };