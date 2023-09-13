const information = {
    months: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapMonths: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    isLeapYear: (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

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
function TimeDelta(week, day, hour, minute, second, millisecond) {
    if (!(this instanceof TimeDelta)) {
        throw new TypeError('TimeDelta must be called with new');
    }

    if (arguments.length === 1) {
        if (arguments[0] instanceof TimeDelta) {
            const date = arguments[0];

            this.week = date.week;
            this.day = date.day;
            this.hour = date.hour;
            this.minute = date.minute;
            this.second = date.second;
            this.millisecond = date.millisecond;
        }
        else if (typeof arguments[0] === 'object' && !Array.isArray(arguments[0]) && arguments[0] != null) {
            const date = arguments[0];

            this.week = date.week || 0;
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
        this.week = week || 0;
        this.day = day || 0;
        this.hour = hour || 0;
        this.minute = minute || 0;
        this.second = second || 0;
        this.millisecond = millisecond || 0;
    }

    let amount = ((((this.week * 7 + this.day) * 24 + this.hour) * 60 + this.minute) * 60 + this.second) * 1000 + this.millisecond;

    this.millisecond = amount % 1000;
    amount = Math.floor(amount / 1000);
    this.second = amount % 60;
    amount = Math.floor(amount / 60);
    this.minute = amount % 60;
    amount = Math.floor(amount / 60);
    this.hour = amount % 24;
    amount = Math.floor(amount / 24);
    this.day = amount % 7;
    amount = Math.floor(amount / 7);
    this.week = amount;
}

TimeDelta = Object.assign(TimeDelta, {
});

TimeDelta.prototype = {
    toString() {
        let ret = 'TimeDelta(';

        if (this.week) ret += `week=${this.week}, `;
        if (this.day) ret += `day=${this.day}, `;
        if (this.hour) ret += `hour=${this.hour}, `;
        if (this.minute) ret += `minute=${this.minute}, `;
        if (this.second) ret += `second=${this.second}, `;
        if (this.millisecond) ret += `millisecond=${this.millisecond}, `;

        return (ret.endsWith('(') ? ret : ret.slice(0, -2)) + ')';
    },

    toNumber() {
        return ((((this.week * 7 + this.day) * 24 + this.hour) * 60 + this.minute) * 60 + this.second) * 1000 + this.millisecond;
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
            this.hour = date.hour;
            this.minute = date.minute;
            this.second = date.second;
            this.millisecond = date.millisecond;
        }
        else if (typeof arguments[0] === 'object' && !Array.isArray(arguments[0]) && arguments[0] != null) {
            const date = arguments[0];

            this.year = date.year || new Date().getFullYear();
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
        this.year = year || new Date().getFullYear();
        this.month = month || 1;
        this.day = day || 1;
        this.hour = hour || 0;
        this.minute = minute || 0;
        this.second = second || 0;
        this.millisecond = millisecond || 0;
    }

    // todo: 제한 넘어가면 그만큼 받아올림
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
    }
});

Datetime.prototype = {
    toString(globalCode) {
        globalCode ||= "en_US";

        const cultureInfo = require(`globalization/${globalCode}`);
        let format = cultureInfo['formats']['fullDatetime'];
        // MMMM dd, yyyy h:mm:ss tt

        return format
            .replace('yyyy', this.year.toString().padStart(4, '0'))
            .replace('MMMM', cultureInfo['monthNames'][this.month - 1])
            .replace('MMM', cultureInfo['monthNamesShort'][this.month - 1])



        const _year = this.year.toString().padStart(4, '0');
        const _month = this.month.toString().padStart(2, '0');
        const _day = this.day.toString().padStart(2, '0');
        const _hour = this.hour.toString().padStart(2, '0');
        const _minute = this.minute.toString().padStart(2, '0');
        const _second = this.second.toString().padStart(2, '0');
        const _millisecond = this.millisecond.toString().padStart(3, '0');

        return `${_year}-${_month}-${_day} ${_hour}:${_minute}:${_second}.${_millisecond}`;
    },

    toISOString() {
        const _year = this.year.toString().padStart(4, '0');
        const _month = this.month.toString().padStart(2, '0');
        const _day = this.day.toString().padStart(2, '0');
        const _hour = this.hour.toString().padStart(2, '0');
        const _minute = this.minute.toString().padStart(2, '0');
        const _second = this.second.toString().padStart(2, '0');
        const _millisecond = this.millisecond.toString().padStart(3, '0');

        return `${_year}-${_month}-${_day}T${_hour}:${_minute}:${_second}.${_millisecond}Z`;
    },

    toNumber() {

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

        let amount;


        return new TimeDelta({ millisecond: amount });
    }
};

module.exports = { Datetime, TimeDelta };