function TimeDelta(year, month, day, hour, minute, second, millisecond) {
    if (!(this instanceof TimeDelta)) {
        throw new TypeError('TimeDelta must be called with new');
    }

    if (arguments.length === 1) {
        if (arguments[0] instanceof TimeDelta) {
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
    }

    // todo: 제한 넘어가면 그만큼 받아올림

    this.year = year || 0;
    this.month = month || 0;
    this.day = day || 0;
    this.hour = hour || 0;
    this.minute = minute || 0;
    this.second = second || 0;
    this.millisecond = millisecond || 0;
}

TimeDelta = Object.assign(TimeDelta, {
});

TimeDelta.prototype = {
    toString() {
        let ret = 'TimeDelta(';

        if (this.year) ret += `year=${this.year}, `;
        if (this.month) ret += `month=${this.month}, `;
        if (this.day) ret += `day=${this.day}, `;
        if (this.hour) ret += `hour=${this.hour}, `;
        if (this.minute) ret += `minute=${this.minute}, `;
        if (this.second) ret += `second=${this.second}, `;
        if (this.millisecond) ret += `millisecond=${this.millisecond}, `;

        return (ret.endsWith('(') ? ret : ret.slice(0, -2)) + ')';
    }
};

module.exports = TimeDelta;