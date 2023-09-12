const TimeDelta = require('./timedelta');

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

            return this;
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

            return this;
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

            return this;
        }
        else {
            throw new TypeError('Datetime constructor argument must be Date, Datetime, object');
        }
    }

    // todo: 제한 넘어가면 그만큼 받아올림

    this.year = year || new Date().getFullYear();
    this.month = month || 1;
    this.day = day || 1;
    this.hour = hour || 0;
    this.minute = minute || 0;
    this.second = second || 0;
    this.millisecond = millisecond || 0;
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
    toString() {
        const _year = this.year.toString().padStart(4, '0');
        const _month = this.month.toString().padStart(2, '0');
        const _day = this.day.toString().padStart(2, '0');
        const _hour = this.hour.toString().padStart(2, '0');
        const _minute = this.minute.toString().padStart(2, '0');
        const _second = this.second.toString().padStart(2, '0');
        const _millisecond = this.millisecond.toString().padStart(3, '0');

        return `${_year}-${_month}-${_day} ${_hour}:${_minute}:${_second}.${_millisecond}`;
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
            this.year + timeDelta.year,
            this.month + timeDelta.month,
            this.day + timeDelta.day,
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

        return new TimeDelta(
            this.year - datetime.year,
            this.month - datetime.month,
            this.day - datetime.day,
            this.hour - datetime.hour,
            this.minute - datetime.minute,
            this.second - datetime.second,
            this.millisecond - datetime.millisecond
        );
    }
};

module.exports = Datetime;