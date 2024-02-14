"use strict";

var _Parser;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = new RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) { var t = o[r]; return "$" + (Array.isArray(t) ? t.join("$") : t); })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != _typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var IS_DIST = false;
var $D = !IS_DIST ? global.Date : Date;
var Duration = /*#__PURE__*/function () {
  function Duration(millisecond) {
    _classCallCheck(this, Duration);
    this._amount = millisecond;
  }
  _createClass(Duration, [{
    key: "amount",
    get: function get() {
      return this._amount;
    },
    set: function set(value) {
      this._amount = value;
    }
  }, {
    key: "millisecond",
    get: function get() {
      return this.amount % 1000;
    }
  }, {
    key: "second",
    get: function get() {
      return Math.floor(this.amount / 1000) % 86400;
    }
  }, {
    key: "day",
    get: function get() {
      return Math.floor(this.amount / 86400000);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "duration(day=".concat(this.day, ", second=").concat(this.second, ", millisecond=").concat(this.millisecond, ")");
    }
  }]);
  return Duration;
}();
var Date = /*#__PURE__*/function () {
  function Date(year, month, day) {
    _classCallCheck(this, Date);
    this._source = new $D(year, month - 1, day);
  }
  _createClass(Date, [{
    key: "year",
    get: function get() {
      return this._source.getFullYear();
    }
  }, {
    key: "month",
    get: function get() {
      return this._source.getMonth() + 1;
    }
  }, {
    key: "day",
    get: function get() {
      return this._source.getDate();
    }
  }, {
    key: "toString",
    value: function toString() {
      return "date(year=".concat(this.year, ", month=").concat(this.month, ", day=").concat(this.day, ")");
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        year: this.year,
        month: this.month,
        day: this.day
      };
    }
  }]);
  return Date;
}();
var Time = /*#__PURE__*/function () {
  function Time(hour, minute, second, millisecond) {
    _classCallCheck(this, Time);
    this._source = new $D();
    this._source.setHours(hour);
    this._source.setMinutes(minute);
    this._source.setSeconds(second);
    this._source.setMilliseconds(millisecond);
  }
  _createClass(Time, [{
    key: "hour",
    get: function get() {
      return this._source.getHours();
    }
  }, {
    key: "minute",
    get: function get() {
      return this._source.getMinutes();
    }
  }, {
    key: "second",
    get: function get() {
      return this._source.getSeconds();
    }
  }, {
    key: "millisecond",
    get: function get() {
      return this._source.getMilliseconds();
    }
  }, {
    key: "toString",
    value: function toString() {
      return "time(hour=".concat(this.hour, ", minute=").concat(this.minute, ", second=").concat(this.second, ", millisecond=").concat(this.millisecond, ")");
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        millisecond: this.millisecond
      };
    }
  }]);
  return Time;
}();
var DateTime = /*#__PURE__*/function () {
  function DateTime(datetimeObject, locale) {
    _classCallCheck(this, DateTime);
    this._source = new $D();
    this._locale = locale !== null && locale !== void 0 ? locale : 'ko-KR';
    if (datetimeObject instanceof $D) {
      this._source = datetimeObject;
    } else if (datetimeObject !== undefined) {
      var dt;
      if (datetimeObject instanceof DateTime) dt = datetimeObject;else if (typeof datetimeObject === 'number') dt = DateTime.fromNumber(datetimeObject);else if (_typeof(datetimeObject) === 'object' && !Array.isArray(datetimeObject)) dt = DateTime.fromObject(datetimeObject);else if (typeof datetimeObject === 'string') dt = DateTime.fromString(datetimeObject, this._locale);else throw new TypeError('`datetimeObject` must be $D, datetime, number, object, or string');
      this._source = dt._source;
      this._locale = dt._locale;
    }
  }
  _createClass(DateTime, [{
    key: "date",
    get: function get() {
      return new Date(this._source.getFullYear(), this._source.getMonth() + 1, this._source.getDate());
    },
    set: function set(dateObject) {
      var _dateObject$year, _ref, _dateObject$day;
      if (!(dateObject instanceof Date)) throw new TypeError('`date` must be date');
      this._source.setFullYear((_dateObject$year = dateObject.year) !== null && _dateObject$year !== void 0 ? _dateObject$year : this._source.getFullYear());
      this._source.setMonth((_ref = dateObject.month - 1) !== null && _ref !== void 0 ? _ref : this._source.getMonth());
      this._source.setDate((_dateObject$day = dateObject.day) !== null && _dateObject$day !== void 0 ? _dateObject$day : this._source.getDate());
    }
  }, {
    key: "time",
    get: function get() {
      return new Time(this._source.getHours(), this._source.getMinutes(), this._source.getSeconds(), this._source.getMilliseconds());
    },
    set: function set(timeObject) {
      var _timeObject$hour, _timeObject$minute, _timeObject$second, _timeObject$milliseco;
      if (!(timeObject instanceof Time)) throw new TypeError('`time` must be time');
      this._source.setHours((_timeObject$hour = timeObject.hour) !== null && _timeObject$hour !== void 0 ? _timeObject$hour : this._source.getHours());
      this._source.setMinutes((_timeObject$minute = timeObject.minute) !== null && _timeObject$minute !== void 0 ? _timeObject$minute : this._source.getMinutes());
      this._source.setSeconds((_timeObject$second = timeObject.second) !== null && _timeObject$second !== void 0 ? _timeObject$second : this._source.getSeconds());
      this._source.setMilliseconds((_timeObject$milliseco = timeObject.millisecond) !== null && _timeObject$milliseco !== void 0 ? _timeObject$milliseco : this._source.getMilliseconds());
    }
  }, {
    key: "year",
    get: function get() {
      return this._source.getFullYear();
    },
    set: function set(value) {
      this._source.setFullYear(value);
    }
  }, {
    key: "month",
    get: function get() {
      return this._source.getMonth() + 1;
    },
    set: function set(value) {
      this._source.setMonth(value - 1);
    }
  }, {
    key: "day",
    get: function get() {
      return this._source.getDate();
    },
    set: function set(value) {
      this._source.setDate(value);
    }
  }, {
    key: "weekday",
    get: function get() {
      return this._source.getDay();
    }
  }, {
    key: "weekdayName",
    get: function get() {
      var cultureInfo = IS_DIST ? JSON.parse(FileStream.read("/sdcard/msgbot/global_modules/datetime/globalization/".concat(this.locale, ".json"))) : require("./globalization/".concat(this.locale, ".json"));
      if (!cultureInfo) throw new Error('Invalid locale, not found ' + this.locale);
      return cultureInfo['WW'][this.weekday];
    }
  }, {
    key: "hour",
    get: function get() {
      return this._source.getHours();
    },
    set: function set(value) {
      this._source.setHours(value);
    }
  }, {
    key: "minute",
    get: function get() {
      return this._source.getMinutes();
    },
    set: function set(value) {
      this._source.setMinutes(value);
    }
  }, {
    key: "second",
    get: function get() {
      return this._source.getSeconds();
    },
    set: function set(value) {
      this._source.setSeconds(value);
    }
  }, {
    key: "millisecond",
    get: function get() {
      return this._source.getMilliseconds();
    },
    set: function set(value) {
      this._source.setMilliseconds(value);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    },
    set: function set(value) {
      this._locale = value;
    }
  }, {
    key: "timestamp",
    value: function timestamp() {
      return this._source.getTime();
    }
  }, {
    key: "toString",
    value: function toString(formatString) {
      var _formatString,
        _this = this;
      var cultureInfo = IS_DIST ? JSON.parse(FileStream.read("/sdcard/msgbot/global_modules/datetime/globalization/".concat(this.locale, ".json"))) : require("./globalization/".concat(this.locale, ".json"));
      if (!cultureInfo) throw new Error('Invalid locale, not found ' + this.locale);
      formatString = (_formatString = formatString) !== null && _formatString !== void 0 ? _formatString : cultureInfo['formats']['full'];
      return formatString.replace(/ss?s?|mm?|hh?|ii?|t|DD?|WW?|MM?M?M?|YY(?:YY)?/g, function (match) {
        switch (match) {
          case 's':
            return _this.second;
          case 'ss':
            return _this.second.toString().padStart(2, '0');
          case 'sss':
            return _this.millisecond;
          case 'm':
            return _this.minute;
          case 'mm':
            return _this.minute.toString().padStart(2, '0');
          case 'h':
            return _this.hour === 12 ? 12 : _this.hour % 12;
          case 'hh':
            return (_this.hour === 12 ? 12 : _this.hour % 12).toString().padStart(2, '0');
          case 'i':
            return _this.hour;
          case 'ii':
            return _this.hour.toString().padStart(2, '0');
          case 't':
            return cultureInfo['t'][_this.hour < 12 ? 0 : 1];
          case 'D':
            return _this.day;
          case 'DD':
            return _this.day.toString().padStart(2, '0');
          case 'W':
            return cultureInfo['W'][_this.weekday];
          case 'WW':
            return cultureInfo['WW'][_this.weekday];
          case 'M':
            return _this.month;
          case 'MM':
            return _this.month.toString().padStart(2, '0');
          case 'MMM':
            return cultureInfo['MMM'][_this.month - 1];
          case 'MMMM':
            return cultureInfo['MMMM'][_this.month - 1];
          case 'YY':
            return _this.year % 100;
          case 'YYYY':
            return _this.year;
          default:
            throw new Error("unknown format ".concat(match));
        }
      });
    }
  }, {
    key: "humanize",
    value: function humanize() {
      // TODO: implement
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.timestamp();
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return this._source;
    }
  }, {
    key: "toObject",
    value: function toObject() {
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
  }, {
    key: "add",
    value: function add(datetimeObject) {
      if (datetimeObject instanceof Duration) {
        var dt = this.toDate();
        dt.setMilliseconds(dt.getMilliseconds() + datetimeObject.amount);
        return new DateTime(dt, this.locale);
      } else {
        var _datetimeObject$year, _datetimeObject$month, _datetimeObject$day, _datetimeObject$week, _datetimeObject$hour, _datetimeObject$minut, _datetimeObject$secon, _datetimeObject$milli;
        var _dt = this.toDate();
        _dt.setFullYear(_dt.getFullYear() + ((_datetimeObject$year = datetimeObject.year) !== null && _datetimeObject$year !== void 0 ? _datetimeObject$year : 0));
        _dt.setMonth(_dt.getMonth() + ((_datetimeObject$month = datetimeObject.month) !== null && _datetimeObject$month !== void 0 ? _datetimeObject$month : 0));
        _dt.setDate(_dt.getDate() + ((_datetimeObject$day = datetimeObject.day) !== null && _datetimeObject$day !== void 0 ? _datetimeObject$day : 0));
        _dt.setDate(_dt.getDate() + 7 * ((_datetimeObject$week = datetimeObject.week) !== null && _datetimeObject$week !== void 0 ? _datetimeObject$week : 0));
        _dt.setHours(_dt.getHours() + ((_datetimeObject$hour = datetimeObject.hour) !== null && _datetimeObject$hour !== void 0 ? _datetimeObject$hour : 0));
        _dt.setMinutes(_dt.getMinutes() + ((_datetimeObject$minut = datetimeObject.minute) !== null && _datetimeObject$minut !== void 0 ? _datetimeObject$minut : 0));
        _dt.setSeconds(_dt.getSeconds() + ((_datetimeObject$secon = datetimeObject.second) !== null && _datetimeObject$secon !== void 0 ? _datetimeObject$secon : 0));
        _dt.setMilliseconds(_dt.getMilliseconds() + ((_datetimeObject$milli = datetimeObject.millisecond) !== null && _datetimeObject$milli !== void 0 ? _datetimeObject$milli : 0));
        return new DateTime(_dt, this.locale);
      }
    }
  }, {
    key: "sub",
    value: function sub(datetimeObject) {
      if (datetimeObject instanceof DateTime) return new Duration(this.timestamp() - datetimeObject.timestamp());else if (datetimeObject instanceof Duration) {
        var dt = this.toDate();
        dt.setMilliseconds(dt.getMilliseconds() - datetimeObject.amount);
        return new DateTime(dt, this.locale);
      } else {
        var _datetimeObject$year2, _datetimeObject$month2, _datetimeObject$day2, _datetimeObject$week2, _datetimeObject$hour2, _datetimeObject$minut2, _datetimeObject$secon2, _datetimeObject$milli2;
        var _dt2 = this.toDate();
        _dt2.setFullYear(_dt2.getFullYear() - ((_datetimeObject$year2 = datetimeObject.year) !== null && _datetimeObject$year2 !== void 0 ? _datetimeObject$year2 : 0));
        _dt2.setMonth(_dt2.getMonth() - ((_datetimeObject$month2 = datetimeObject.month) !== null && _datetimeObject$month2 !== void 0 ? _datetimeObject$month2 : 0));
        _dt2.setDate(_dt2.getDate() - ((_datetimeObject$day2 = datetimeObject.day) !== null && _datetimeObject$day2 !== void 0 ? _datetimeObject$day2 : 0));
        _dt2.setDate(_dt2.getDate() - 7 * ((_datetimeObject$week2 = datetimeObject.week) !== null && _datetimeObject$week2 !== void 0 ? _datetimeObject$week2 : 0));
        _dt2.setHours(_dt2.getHours() - ((_datetimeObject$hour2 = datetimeObject.hour) !== null && _datetimeObject$hour2 !== void 0 ? _datetimeObject$hour2 : 0));
        _dt2.setMinutes(_dt2.getMinutes() - ((_datetimeObject$minut2 = datetimeObject.minute) !== null && _datetimeObject$minut2 !== void 0 ? _datetimeObject$minut2 : 0));
        _dt2.setSeconds(_dt2.getSeconds() - ((_datetimeObject$secon2 = datetimeObject.second) !== null && _datetimeObject$secon2 !== void 0 ? _datetimeObject$secon2 : 0));
        _dt2.setMilliseconds(_dt2.getMilliseconds() - ((_datetimeObject$milli2 = datetimeObject.millisecond) !== null && _datetimeObject$milli2 !== void 0 ? _datetimeObject$milli2 : 0));
        return new DateTime(_dt2, this.locale);
      }
    }
  }, {
    key: "set",
    value: function set(datetimeObject) {
      if (datetimeObject instanceof DateTime) {
        this._source = datetimeObject.toDate();
      } else if (datetimeObject instanceof Date) {
        var _datetimeObject$year3, _ref2, _datetimeObject$day3;
        this._source.setFullYear((_datetimeObject$year3 = datetimeObject.year) !== null && _datetimeObject$year3 !== void 0 ? _datetimeObject$year3 : this._source.getFullYear());
        this._source.setMonth((_ref2 = datetimeObject.month - 1) !== null && _ref2 !== void 0 ? _ref2 : this._source.getMonth());
        this._source.setDate((_datetimeObject$day3 = datetimeObject.day) !== null && _datetimeObject$day3 !== void 0 ? _datetimeObject$day3 : this._source.getDate());
      } else if (datetimeObject instanceof Time) {
        var _datetimeObject$hour3, _datetimeObject$minut3, _datetimeObject$secon3, _datetimeObject$milli3;
        this._source.setHours((_datetimeObject$hour3 = datetimeObject.hour) !== null && _datetimeObject$hour3 !== void 0 ? _datetimeObject$hour3 : this._source.getHours());
        this._source.setMinutes((_datetimeObject$minut3 = datetimeObject.minute) !== null && _datetimeObject$minut3 !== void 0 ? _datetimeObject$minut3 : this._source.getMinutes());
        this._source.setSeconds((_datetimeObject$secon3 = datetimeObject.second) !== null && _datetimeObject$secon3 !== void 0 ? _datetimeObject$secon3 : this._source.getSeconds());
        this._source.setMilliseconds((_datetimeObject$milli3 = datetimeObject.millisecond) !== null && _datetimeObject$milli3 !== void 0 ? _datetimeObject$milli3 : this._source.getMilliseconds());
      } else {
        var _datetimeObject$year4, _ref3, _datetimeObject$day4, _datetimeObject$hour4, _datetimeObject$minut4, _datetimeObject$secon4, _datetimeObject$milli4;
        this._source.setFullYear((_datetimeObject$year4 = datetimeObject.year) !== null && _datetimeObject$year4 !== void 0 ? _datetimeObject$year4 : this._source.getFullYear());
        this._source.setMonth((_ref3 = datetimeObject.month - 1) !== null && _ref3 !== void 0 ? _ref3 : this._source.getMonth());
        this._source.setDate((_datetimeObject$day4 = datetimeObject.day) !== null && _datetimeObject$day4 !== void 0 ? _datetimeObject$day4 : this._source.getDate());
        this._source.setHours((_datetimeObject$hour4 = datetimeObject.hour) !== null && _datetimeObject$hour4 !== void 0 ? _datetimeObject$hour4 : this._source.getHours());
        this._source.setMinutes((_datetimeObject$minut4 = datetimeObject.minute) !== null && _datetimeObject$minut4 !== void 0 ? _datetimeObject$minut4 : this._source.getMinutes());
        this._source.setSeconds((_datetimeObject$secon4 = datetimeObject.second) !== null && _datetimeObject$secon4 !== void 0 ? _datetimeObject$secon4 : this._source.getSeconds());
        this._source.setMilliseconds((_datetimeObject$milli4 = datetimeObject.millisecond) !== null && _datetimeObject$milli4 !== void 0 ? _datetimeObject$milli4 : this._source.getMilliseconds());
      }
    }
  }, {
    key: "eq",
    value: function eq(datetimeObject) {
      var other = new DateTime(datetimeObject, this.locale);
      return this.timestamp() === other.timestamp();
    }
  }, {
    key: "neq",
    value: function neq(datetimeObject) {
      return !this.eq(datetimeObject);
    }
  }, {
    key: "ge",
    value: function ge(datetimeObject) {
      var other = new DateTime(datetimeObject, this.locale);
      return this.timestamp() >= other.timestamp();
    }
  }, {
    key: "gt",
    value: function gt(datetimeObject) {
      var other = new DateTime(datetimeObject, this.locale);
      return this.timestamp() > other.timestamp();
    }
  }, {
    key: "le",
    value: function le(datetimeObject) {
      var other = new DateTime(datetimeObject, this.locale);
      return this.timestamp() <= other.timestamp();
    }
  }, {
    key: "lt",
    value: function lt(datetimeObject) {
      var other = new DateTime(datetimeObject, this.locale);
      return this.timestamp() < other.timestamp();
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear() {
      return DateTime.isLeapYear(this.year);
    }
  }, {
    key: "isWeekend",
    value: function isWeekend() {
      return this.weekday === 0 || this.weekday === 6;
    }
  }, {
    key: "isWeekday",
    value: function isWeekday() {
      return !this.isWeekend();
    }
  }, {
    key: "isToday",
    value: function isToday() {
      var now = new $D();
      return this.year === now.getFullYear() && this.month === now.getMonth() + 1 && this.day === now.getDate();
    }
  }, {
    key: "lengthOfMonth",
    value: function lengthOfMonth() {
      return [0, 31, this.isLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.month];
    }
  }, {
    key: "lengthOfYear",
    value: function lengthOfYear() {
      return this.isLeapYear() ? 366 : 365;
    }
  }], [{
    key: "fromTimestamp",
    value: function fromTimestamp(timestamp) {
      return DateTime.fromNumber(timestamp);
    }
  }, {
    key: "fromString",
    value: function fromString(dateString, locale) {
      return DateTime.parse(dateString, locale);
    }
  }, {
    key: "dehumanize",
    value: function dehumanize(dateString, locale) {
      return DateTime.parse(dateString, locale);
    }
  }, {
    key: "fromNumber",
    value: function fromNumber(timestamp) {
      return DateTime.fromDate(new $D(timestamp));
    }
  }, {
    key: "fromDate",
    value: function fromDate(date) {
      var dt = new DateTime();
      dt._source = date;
      return dt;
    }
  }, {
    key: "fromObject",
    value: function fromObject(datetimeObject) {
      var _standard$year, _standard$month, _standard$day, _standard$hour, _standard$minute, _standard$second, _standard$millisecond;
      var standard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var now = new DateTime();
      var ret = {};
      ret.year = datetimeObject.year;
      ret.month = datetimeObject.month;
      ret.day = datetimeObject.day;
      ret.hour = datetimeObject.hour;
      ret.minute = datetimeObject.minute;
      ret.second = datetimeObject.second;
      ret.millisecond = datetimeObject.millisecond;
      var defaults = {
        year: standard ? (_standard$year = standard.year) !== null && _standard$year !== void 0 ? _standard$year : now.year : now.year,
        month: standard ? (_standard$month = standard.month) !== null && _standard$month !== void 0 ? _standard$month : now.month : 1,
        day: standard ? (_standard$day = standard.day) !== null && _standard$day !== void 0 ? _standard$day : now.day : 1,
        hour: standard ? (_standard$hour = standard.hour) !== null && _standard$hour !== void 0 ? _standard$hour : now.hour : 0,
        minute: standard ? (_standard$minute = standard.minute) !== null && _standard$minute !== void 0 ? _standard$minute : now.minute : 0,
        second: standard ? (_standard$second = standard.second) !== null && _standard$second !== void 0 ? _standard$second : now.second : 0,
        millisecond: standard ? (_standard$millisecond = standard.millisecond) !== null && _standard$millisecond !== void 0 ? _standard$millisecond : now.millisecond : 0
      };
      var units = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];

      /**
       * "오전 6시" 는 year, month, day는 현재 or 기준(standard)으로, hour는 6, minute, second, millisecond는 0으로 정해지는 것이 합당하다.
       * 아래의 코드는 if (year == null) else if (month == null) ... else if (millisecond == null) 에 대해 각각 for 문으로
       * 전의 unit을 기준(standard)의 값으로, 후의 unit을 시작으로 지정하는 코드다.
       */
      for (var _i = 0, _units = units; _i < _units.length; _i++) {
        var unit = _units[_i];
        if (ret[unit] != null) {
          var x = units.indexOf(unit);
          for (var i = 0; i < x; i++) {
            var _units$i, _ret$_units$i;
            (_ret$_units$i = ret[_units$i = units[i]]) !== null && _ret$_units$i !== void 0 ? _ret$_units$i : ret[_units$i] = now[units[i]];
          }
          for (var _i2 = x; _i2 < units.length; _i2++) {
            var _units$_i, _ret$_units$_i;
            (_ret$_units$_i = ret[_units$_i = units[_i2]]) !== null && _ret$_units$_i !== void 0 ? _ret$_units$_i : ret[_units$_i] = defaults[units[_i2]];
          }
          break;
        }
      }
      console.log(ret); // FIXME: debug

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
      if (ret.millisecond % 1 !== 0) throw new Error('millisecond must be integer');
      return DateTime.set(ret);
    }
  }, {
    key: "at",
    value: function at(hour, minute, second, millisecond) {
      var date = new $D();
      date.setHours(hour);
      date.setMinutes(minute !== null && minute !== void 0 ? minute : 0);
      date.setSeconds(second !== null && second !== void 0 ? second : 0);
      date.setMilliseconds(millisecond !== null && millisecond !== void 0 ? millisecond : 0);
      return new DateTime(date);
    }
  }, {
    key: "in",
    value: function _in(year) {
      return new DateTime(new $D(year, 0, 1));
    }
  }, {
    key: "on",
    value: function on(month, day) {
      var _day;
      day = (_day = day) !== null && _day !== void 0 ? _day : 1;
      return new DateTime(new $D(new $D().getFullYear(), month - 1, day));
    }
  }, {
    key: "set",
    value: function set(datetimeObject) {
      var _datetimeObject$year5, _datetimeObject$month3, _datetimeObject$day5, _datetimeObject$hour5, _datetimeObject$minut5, _datetimeObject$secon5, _datetimeObject$milli5;
      var year = (_datetimeObject$year5 = datetimeObject.year) !== null && _datetimeObject$year5 !== void 0 ? _datetimeObject$year5 : new $D().getFullYear();
      var month = (_datetimeObject$month3 = datetimeObject.month) !== null && _datetimeObject$month3 !== void 0 ? _datetimeObject$month3 : 1;
      var day = (_datetimeObject$day5 = datetimeObject.day) !== null && _datetimeObject$day5 !== void 0 ? _datetimeObject$day5 : 1;
      var hour = (_datetimeObject$hour5 = datetimeObject.hour) !== null && _datetimeObject$hour5 !== void 0 ? _datetimeObject$hour5 : 0;
      var minute = (_datetimeObject$minut5 = datetimeObject.minute) !== null && _datetimeObject$minut5 !== void 0 ? _datetimeObject$minut5 : 0;
      var second = (_datetimeObject$secon5 = datetimeObject.second) !== null && _datetimeObject$secon5 !== void 0 ? _datetimeObject$secon5 : 0;
      var millisecond = (_datetimeObject$milli5 = datetimeObject.millisecond) !== null && _datetimeObject$milli5 !== void 0 ? _datetimeObject$milli5 : 0;
      return new DateTime(new $D(year, month - 1, day, hour, minute, second, millisecond));
    }
  }, {
    key: "parse",
    value: function parse(dateString) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ko-KR';
      return DateTime.fromObject.apply(DateTime, _toConsumableArray(DateTime._parse(dateString, locale)));
    }
  }, {
    key: "_parse",
    value: function _parse(dateString) {
      var _parse2;
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ko-KR';
      // sanitize dateString
      // '  2020년  3월  2일  ' -> '2020년 3월 2일'
      dateString = dateString.trim().replace(/\s+/g, ' ');
      var cultureInfo = IS_DIST ? JSON.parse(FileStream.read("/sdcard/msgbot/global_modules/datetime/globalization/".concat(locale, ".json"))) : require("./globalization/".concat(locale, ".json"));
      if (!cultureInfo) throw new Error('Invalid locale, not found ' + locale);
      var isNumberRegex = /^[+-]?\d+(?:\.\d*)?$/;
      var isRelativeObject = function isRelativeObject(obj) {
        return obj.constructor === Object && 'diff' in obj && typeof obj.diff === 'number' && Object.keys(obj).length === 1;
      };
      var isHomonymObject = function isHomonymObject(obj) {
        return obj.constructor === Object && 'homonym' in obj && Array.isArray(obj.homonym) && Object.keys(obj).length === 1;
      };
      var keywords = {
        units: new Set(['year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']),
        meridiems: new Set(['am', 'pm']),
        weekdays: new Set(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']),
        times: new Set(['morning', 'noon', 'afternoon', 'evening', 'night', 'midnight']),
        counts: new Set(['th', 'half', 'end']),
        relative: new Set(['ago', 'after']),
        standard: new Set(['from', 'of'])
      };
      var homonyms = new Set(Object.keys(cultureInfo.translate).map(function (k) {
        return isHomonymObject(cultureInfo.translate[k]) ? k : null;
      }).filter(function (e) {
        return e !== null;
      }));

      // 1. parse ISO 8601 format
      var parse1 = function parse1() {
        var RE_ISO = /*#__PURE__*/_wrapRegExp(/^(\d{4})\x2D(\d{2})\x2D(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?Z$/, {
          year: 1,
          month: 2,
          day: 3,
          hour: 4,
          minute: 5,
          second: 6,
          millisecond: 7
        });
        var isoMatch = dateString.match(RE_ISO);
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
      var parse2 = function parse2() {
        var meridiem = 'pm';
        for (var key in cultureInfo.translate) {
          if (keywords.meridiems.has(cultureInfo.translate[key]))
            // am, pm이 value인 key들
            meridiem = cultureInfo.translate[key];
        }
        var RE_DATE = /*#__PURE__*/_wrapRegExp(/(?:(\d{4})[-.\/])? *(\d{1,2})[-.\/] *(\d{1,2})\.?/, {
          year: 1,
          month: 2,
          day: 3
        });
        var RE_TIME = /*#__PURE__*/_wrapRegExp(/(\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d{1,3}))?)?/, {
          hour: 1,
          minute: 2,
          second: 3,
          millisecond: 4
        });
        var dateMatch = dateString.match(RE_DATE);
        var timeMatch = dateString.match(RE_TIME);
        if (dateMatch || timeMatch) {
          var _dateMatch$groups, _dateMatch$groups2, _dateMatch$groups3, _timeMatch$groups, _timeMatch$groups2, _timeMatch$groups3, _timeMatch$groups4;
          var year = dateMatch === null || dateMatch === void 0 || (_dateMatch$groups = dateMatch.groups) === null || _dateMatch$groups === void 0 ? void 0 : _dateMatch$groups.year;
          var month = dateMatch === null || dateMatch === void 0 || (_dateMatch$groups2 = dateMatch.groups) === null || _dateMatch$groups2 === void 0 ? void 0 : _dateMatch$groups2.month;
          var day = dateMatch === null || dateMatch === void 0 || (_dateMatch$groups3 = dateMatch.groups) === null || _dateMatch$groups3 === void 0 ? void 0 : _dateMatch$groups3.day;
          var hour = timeMatch === null || timeMatch === void 0 || (_timeMatch$groups = timeMatch.groups) === null || _timeMatch$groups === void 0 ? void 0 : _timeMatch$groups.hour;
          var minute = timeMatch === null || timeMatch === void 0 || (_timeMatch$groups2 = timeMatch.groups) === null || _timeMatch$groups2 === void 0 ? void 0 : _timeMatch$groups2.minute;
          var second = timeMatch === null || timeMatch === void 0 || (_timeMatch$groups3 = timeMatch.groups) === null || _timeMatch$groups3 === void 0 ? void 0 : _timeMatch$groups3.second;
          var millisecond = timeMatch === null || timeMatch === void 0 || (_timeMatch$groups4 = timeMatch.groups) === null || _timeMatch$groups4 === void 0 ? void 0 : _timeMatch$groups4.millisecond;
          if (hour !== undefined && hour < 12 && meridiem === 'pm') hour += 12;
          return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
          };
        }
      };

      // 3. analyze in tokens
      var parse3 = function parse3() {
        var standard = {};

        // sort by length (desc), then by dictionary order (asc)
        // desc로 정렬하기 때문에, '매주' 와 '주' 에서 '매주'에 먼저 매칭될 수 있게 함.
        var keys = Object.keys(cultureInfo.translate);
        keys.sort(function (a, b) {
          return a.length !== b.length ? b.length - a.length : a.localeCompare(b);
        });

        // tokenize dateString
        // '2020년 3월 2일 12시 34분 56초' -> [2020, 'year', 3, 'month', 2, 'day', 12, 'hour', 34, 'minute', 56, 'second']
        var getTokens = function getTokens(dstr) {
          var startIdx = 0;
          var chucks = [];
          var found = false;
          var foundBefore = false;
          while (startIdx < dstr.length) {
            foundBefore = found;
            found = false;
            for (var _i3 = 0, _keys = keys; _i3 < _keys.length; _i3++) {
              var key = _keys[_i3];
              if (dstr.startsWith(key, startIdx)) {
                var value = cultureInfo.translate[key];
                if (chucks.length >= 1 && typeof chucks[chucks.length - 1] === 'number' && typeof value === 'number') {
                  // 십이 -> [10, 2] -> 10+2
                  // 이십 -> [2, 10] -> 2*10
                  if (chucks[chucks.length - 1] > value) chucks[chucks.length - 1] += value;else chucks[chucks.length - 1] *= value;
                } else if (chucks.length >= 1 && isRelativeObject(chucks[chucks.length - 1]) && isRelativeObject(value)) {
                  // 다음 내일 -> [{diff: 1}, {diff: 2}] -> {diff: 1+2}
                  // 내일 다음 -> [{diff: 2}, {diff: 1}] -> {diff: 2+1}

                  chucks[chucks.length - 1].diff += value.diff;
                } else if (Array.isArray(value)) chucks.push.apply(chucks, _toConsumableArray(value));else chucks.push(value);
                startIdx += key.length;
                found = true;
                break;
              }
            }
            if (!found) {
              if (chucks.length === 0) chucks.push('');
              if (foundBefore) chucks.push(dstr[startIdx++]);else chucks[chucks.length - 1] += dstr[startIdx++];
            }
          }
          return chucks.map(function (e) {
            return isNumberRegex.test(e) ? parseFloat(e) : e;
          });
        };
        var splited = dateString.split(' ').map(getTokens).flat();
        var tokens = [];

        /**
         * 공백이 없는 문자열에서의 토큰들끼리는 잘 merge 되었으나, 공백이 없는 문자열들끼리의 토큰들끼리의 merge를 처리해야함.
         * ex. 다음 다음다음 날 -> [다음, 다음다음, 날] -> [{diff: 1}, {diff: 2}, 'day'] -> [{diff: 1+2}, 'day']
         * 위의 예시에서 1+2를 하는 작업을 아래 코드에서 수행함.
         */
        while (splited.length > 0) {
          var value = splited.shift();
          if (tokens.length >= 1 && typeof tokens[tokens.length - 1] === 'number' && typeof value === 'number') {
            if (tokens[tokens.length - 1] > value) tokens[tokens.length - 1] += value;else tokens[tokens.length - 1] *= value;
          } else if (tokens.length >= 1 && isRelativeObject(tokens[tokens.length - 1]) && isRelativeObject(value)) {
            tokens[tokens.length - 1].diff += value.diff;
          } else if (Array.isArray(value)) tokens.push.apply(tokens, _toConsumableArray(value));else tokens.push(value);
        }
        console.log(tokens); // FIXME: debug

        // 세 시간 반 -> 3.5시간
        for (var _i4 = 2; _i4 < tokens.length; _i4++) {
          if (keywords.units.has(tokens[_i4 - 1]) && keywords.counts.has(tokens[_i4]) && tokens[_i4] === 'half' && typeof tokens[_i4 - 2] === 'number') {
            tokens[_i4 - 2] += 0.5;
            tokens.splice(_i4, 1);
            _i4--;
          }
        }

        // [3.5, '시간', '뒤'] -> [{ diff: 3.5 }, '시간']
        var i = 0;
        while (i < tokens.length) {
          if (keywords.relative.has(tokens[i])) {
            if (!standard) standard = DateTime.now();
            var multiplier = tokens[i] === 'ago' ? -1 : 1;
            for (var j = i - 1; j >= 0; j--) {
              if (keywords.standard.has(tokens[j])) break;
              var diff = void 0;
              if (typeof tokens[j] === 'number') diff = tokens[j] * multiplier;else if (isRelativeObject(tokens[j])) diff = tokens[j].diff * multiplier;
              if (diff !== undefined) tokens[j] = {
                diff: diff
              };
            }
            tokens.splice(i, 1);
            i = -1;
          }
          i++;
        }

        // [2022, 'year', 3, 'month', 2, 'day', 12, 'hour', 34, 'minute', 56, 'second']
        var absoluteParse = function absoluteParse() {
          var dateObject = {};
          var meridiem = 'pm';
          for (var _i5 = 0; _i5 < tokens.length; _i5++) {
            var token = tokens[_i5];
            if (keywords.units.has(token)) {
              // year, month, week, day, hour, minute, second, millisecond 감지
              if (cultureInfo['isTurnReversed'] === false) {
                // 한국어처럼 '2022년' 과 같이 뒤에 단위가 붙는 경우
                if (typeof tokens[_i5 - 1] === 'number') {
                  dateObject[token] = tokens[_i5 - 1];
                }
                // else
                // 	throw new Error(`invalid format: { dateObject[${token}]: ${tokens[i - 1]} }`);
              } else {
                // 영어처럼 'year 2022' 와 같이 앞에 단위가 붙는 경우
                if (typeof tokens[_i5 + 1] === 'number') dateObject[token] = tokens[_i5 + 1];
                // else
                // 	throw new Error(`invalid format: { dateObject[${token}]: ${tokens[i + 1]} }`);
              }
            } else if (keywords.meridiems.has(token)) {
              meridiem = token;
            } else if ('hour' in dateObject) {
              if (keywords.meridiems.has(token))
                // am, pm
                meridiem = token;
              if (dateObject['hour'] < 12 && meridiem === 'pm') dateObject['hour'] += 12;
            }
          }
          return dateObject;
        };

        // [3, 'year', 'ago']
        var relativeParse = function relativeParse() {
          var dateObject = {};
          var standard_now = DateTime.now();
          var _loop = function _loop() {
            var token = tokens[_i6];
            if (keywords.standard.has(token)) {
              // 3월 3일로부터
              standard = DateTime._parse(tokens.slice(0, _i6).join(' '), locale)[0];
              standard_now = DateTime.fromObject(standard);
            } else if (keywords.counts.has(token)) {
              var _ref4, _tokens$_ref;
              // [half] week, [end] month, 11 [th] month, 11 [th] sunday, ...
              (_tokens$_ref = tokens[_ref4 = _i6 + 1]) !== null && _tokens$_ref !== void 0 ? _tokens$_ref : tokens[_ref4] = 'millisecond'; // 2023년의 마지막 -> 2023년 12월 31일 23시 59분 59초 999밀리초

              if (keywords.units.has(tokens[_i6 + 1]) || keywords.weekdays.has(tokens[_i6 + 1])) {
                var tokenFront = tokens[_i6 - 1]; // 11, 3, 1, ...
                // token;  // th, half, end
                var tokenBack = tokens[_i6 + 1]; // month, week, day, sunday, ...

                var amount;
                if (token === 'half') amount = function amount(length) {
                  return Math.floor(length / 2);
                };else if (token === 'th') {
                  if (typeof tokenFront !== 'number') throw new Error("invalid format: \"".concat(tokenFront, " th\""));
                  amount = function amount(length) {
                    return Math.min(tokenFront, length);
                  };
                } else if (token === 'end') amount = function amount(length) {
                  return length;
                };
                switch (tokenBack) {
                  case 'year':
                    {
                      var _dateObject$year2;
                      if (token === 'half') dateObject['day'] = amount(DateTime.lengthOfYear((_dateObject$year2 = dateObject['year']) !== null && _dateObject$year2 !== void 0 ? _dateObject$year2 : standard_now.year));else throw new Error('invalid format: "th/end 해"');
                      dateObject['hour'] = 0;
                      dateObject['minute'] = 0;
                      dateObject['second'] = 0;
                      dateObject['millisecond'] = 0;
                      break;
                    }
                  case 'month':
                    {
                      if (token === 'half') {
                        var _dateObject$year3, _dateObject$month;
                        dateObject['day'] = amount(DateTime.lengthOfMonth((_dateObject$year3 = dateObject['year']) !== null && _dateObject$year3 !== void 0 ? _dateObject$year3 : standard_now.year, (_dateObject$month = dateObject['month']) !== null && _dateObject$month !== void 0 ? _dateObject$month : standard_now.month));
                        dateObject['hour'] = 0;
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      } else {
                        dateObject['month'] = amount(12);
                        dateObject['day'] = 1;
                        dateObject['hour'] = 0;
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                      break;
                    }
                  case 'week':
                    {
                      if (token === 'half') {
                        dateObject['day'] = standard_now.day + (amount(7) - standard_now.weekday + 7) % 7;
                        dateObject['hour'] = 0;
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      } else {
                        var _dateObject$year4, _dateObject$month2;
                        dateObject['day'] = standard_now.day + (0 - dateObject['weekday'] + 7) % 7;
                        var lengthOfMonth = DateTime.lengthOfMonth((_dateObject$year4 = dateObject['year']) !== null && _dateObject$year4 !== void 0 ? _dateObject$year4 : standard_now.year, (_dateObject$month2 = dateObject['month']) !== null && _dateObject$month2 !== void 0 ? _dateObject$month2 : standard_now.month);

                        // 만약 23일이 일요일이라면 16, 9, 2일이 셋째주, 둘째주, 셋째주가 됨
                        // 23 % 7 == 2 이므로 2일이 첫주의 시작이 되어야 함
                        // 이 달의 길이가 31일이라면 (31 - 2) // 7 == 4 이므로 4주차가 됨 (2, 9, 16, 23, 30)
                        var first = dateObject['day'] % 7;
                        var weeks = [first];
                        for (var _i7 = first + 7; _i7 <= lengthOfMonth; _i7 += 7) weeks.push(_i7);
                        dateObject['day'] = weeks[amount(weeks.length)];
                        dateObject['hour'] = 0;
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                      break;
                    }
                  case 'day':
                    {
                      if (token === 'half') {
                        dateObject['hour'] = amount(24);
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                      // else if (token === 'end') {
                      //
                      // }
                      else {
                        var _dateObject$year5, _dateObject$month3;
                        // th
                        dateObject['day'] = amount(DateTime.lengthOfMonth((_dateObject$year5 = dateObject['year']) !== null && _dateObject$year5 !== void 0 ? _dateObject$year5 : standard_now.year, (_dateObject$month3 = dateObject['month']) !== null && _dateObject$month3 !== void 0 ? _dateObject$month3 : standard_now.month));
                        dateObject['hour'] = 0;
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                      break;
                    }
                  case 'hour':
                    {
                      if (token === 'half') {
                        dateObject['minute'] = amount(60);
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      } else {
                        dateObject['hour'] = amount(24);
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                      break;
                    }
                  case 'minute':
                    {
                      if (token === 'half') {
                        dateObject['second'] = amount(60);
                        dateObject['millisecond'] = 0;
                      } else {
                        dateObject['minute'] = amount(60);
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                      break;
                    }
                  case 'second':
                    {
                      if (token === 'half') {
                        dateObject['millisecond'] = amount(1000);
                      } else {
                        dateObject['second'] = amount(60);
                        dateObject['millisecond'] = 0;
                      }
                      break;
                    }
                  case 'millisecond':
                    {
                      if (token === 'half') throw new Error('invalid format: "half 밀리초"');else dateObject['millisecond'] = amount(1000);
                      break;
                    }
                  default:
                    {
                      // weekday
                      if (token === 'half') throw new Error('invalid format: "half 요일"');else {
                        var _dateObject$year6, _dateObject$month4;
                        dateObject['day'] = standard_now.day + (DateTime.getWeekDayFromName(tokenBack, locale = 'en-US') - standard_now.weekday + 7) % 7;
                        var _lengthOfMonth = DateTime.lengthOfMonth((_dateObject$year6 = dateObject['year']) !== null && _dateObject$year6 !== void 0 ? _dateObject$year6 : standard_now.year, (_dateObject$month4 = dateObject['month']) !== null && _dateObject$month4 !== void 0 ? _dateObject$month4 : standard_now.month);
                        var _first = dateObject['day'] % 7;
                        var _weeks = [_first];
                        for (var _i8 = _first + 7; _i8 <= _lengthOfMonth; _i8 += 7) _weeks.push(_i8);
                        dateObject['day'] = _weeks[amount(_weeks.length)];
                        dateObject['hour'] = 0;
                        dateObject['minute'] = 0;
                        dateObject['second'] = 0;
                        dateObject['millisecond'] = 0;
                      }
                    }
                }
              }
            } else if (keywords.times.has(token)) {
              dateObject['minute'] = 0;
              dateObject['second'] = 0;
              dateObject['millisecond'] = 0;
              if (token === 'morning') dateObject['hour'] = 9;else if (token === 'noon') dateObject['hour'] = 12;else if (token === 'afternoon') dateObject['hour'] = 15;else if (token === 'evening') dateObject['hour'] = 18;else if (token === 'night') dateObject['hour'] = 21;else if (token === 'midnight') {
                var _dateObject$day2;
                dateObject['hour'] = 0;
                dateObject['day'] = (_dateObject$day2 = dateObject['day']) !== null && _dateObject$day2 !== void 0 ? _dateObject$day2 : standard_now.day + 1;
              }
            } else if (isRelativeObject(token)) {
              if (keywords.units.has(tokens[_i6 + 1])) {
                dateObject[tokens[_i6 + 1]] = standard_now[tokens[_i6 + 1]] + token.diff;
              }
            }
          };
          for (var _i6 = 0; _i6 < tokens.length; _i6++) {
            _loop();
          }
          return dateObject;
        };
        var absolute = absoluteParse();
        var relative = relativeParse();
        var result = Object.assign(absolute, relative);
        if (Object.keys(result).length > 0) return [result, standard];
      };
      var parsed = (_parse2 = parse1()) !== null && _parse2 !== void 0 ? _parse2 : parse2();
      if (parsed !== undefined) return [parsed, undefined];else {
        var _parsed = parse3();
        if (_parsed !== undefined) return _parsed;else throw new Error('Invalid date string: ' + dateString);
      }
    }
  }, {
    key: "now",
    value: function now() {
      return new DateTime(new $D());
    }
  }, {
    key: "today",
    value: function today() {
      var now = new $D();
      return new DateTime(new $D(now.getFullYear(), now.getMonth(), now.getDate()));
    }
  }, {
    key: "tomorrow",
    value: function tomorrow() {
      var now = new $D();
      return new DateTime(new $D(now.getFullYear(), now.getMonth(), now.getDate() + 1));
    }
  }, {
    key: "yesterday",
    value: function yesterday() {
      var now = new $D();
      return new DateTime(new $D(now.getFullYear(), now.getMonth(), now.getDate() - 1));
    }
  }, {
    key: "sunday",
    value: function sunday() {
      var diff = (0 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "monday",
    value: function monday() {
      var diff = (1 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "tuesday",
    value: function tuesday() {
      var diff = (2 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "wednesday",
    value: function wednesday() {
      var diff = (3 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "thursday",
    value: function thursday() {
      var diff = (4 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "friday",
    value: function friday() {
      var diff = (5 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "saturday",
    value: function saturday() {
      var diff = (6 - new $D().getDay() + 7) % 7;
      return DateTime.today().add({
        day: diff
      });
    }
  }, {
    key: "january",
    value: function january(day) {
      var _day2;
      day = (_day2 = day) !== null && _day2 !== void 0 ? _day2 : 1;
      return new DateTime({
        month: 1,
        day: day
      });
    }
  }, {
    key: "february",
    value: function february(day) {
      var _day3;
      day = (_day3 = day) !== null && _day3 !== void 0 ? _day3 : 1;
      return new DateTime({
        month: 2,
        day: day
      });
    }
  }, {
    key: "march",
    value: function march(day) {
      var _day4;
      day = (_day4 = day) !== null && _day4 !== void 0 ? _day4 : 1;
      return new DateTime({
        month: 3,
        day: day
      });
    }
  }, {
    key: "april",
    value: function april(day) {
      var _day5;
      day = (_day5 = day) !== null && _day5 !== void 0 ? _day5 : 1;
      return new DateTime({
        month: 4,
        day: day
      });
    }
  }, {
    key: "may",
    value: function may(day) {
      var _day6;
      day = (_day6 = day) !== null && _day6 !== void 0 ? _day6 : 1;
      return new DateTime({
        month: 5,
        day: day
      });
    }
  }, {
    key: "june",
    value: function june(day) {
      var _day7;
      day = (_day7 = day) !== null && _day7 !== void 0 ? _day7 : 1;
      return new DateTime({
        month: 6,
        day: day
      });
    }
  }, {
    key: "july",
    value: function july(day) {
      var _day8;
      day = (_day8 = day) !== null && _day8 !== void 0 ? _day8 : 1;
      return new DateTime({
        month: 7,
        day: day
      });
    }
  }, {
    key: "august",
    value: function august(day) {
      var _day9;
      day = (_day9 = day) !== null && _day9 !== void 0 ? _day9 : 1;
      return new DateTime({
        month: 8,
        day: day
      });
    }
  }, {
    key: "september",
    value: function september(day) {
      var _day10;
      day = (_day10 = day) !== null && _day10 !== void 0 ? _day10 : 1;
      return new DateTime({
        month: 9,
        day: day
      });
    }
  }, {
    key: "october",
    value: function october(day) {
      var _day11;
      day = (_day11 = day) !== null && _day11 !== void 0 ? _day11 : 1;
      return new DateTime({
        month: 10,
        day: day
      });
    }
  }, {
    key: "november",
    value: function november(day) {
      var _day12;
      day = (_day12 = day) !== null && _day12 !== void 0 ? _day12 : 1;
      return new DateTime({
        month: 11,
        day: day
      });
    }
  }, {
    key: "december",
    value: function december(day) {
      day = day || 1;
      return new DateTime({
        month: 12,
        day: day
      });
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
  }, {
    key: "leapYearCount",
    value: function leapYearCount(start, end) {
      var l = function l(y) {
        return Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
      };
      return l(end) - l(start) + (DateTime.isLeapYear(start) ? 1 : 0); // [start, end]
    }
  }, {
    key: "lengthOfMonth",
    value: function lengthOfMonth(year, month) {
      return [0, 31, DateTime.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
  }, {
    key: "lengthOfYear",
    value: function lengthOfYear(year) {
      return DateTime.isLeapYear(year) ? 366 : 365;
    }
  }, {
    key: "getWeekDayFromName",
    value: function getWeekDayFromName(weekDayName) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ko-KR';
      var cultureInfo = IS_DIST ? JSON.parse(FileStream.read("/sdcard/msgbot/global_modules/datetime/globalization/".concat(locale, ".json"))) : require("./globalization/".concat(locale, ".json"));
      if (!cultureInfo) throw new Error('Invalid locale, not found ' + locale);
      var ret = cultureInfo['W'].map(function (e) {
        return e.toLowerCase();
      }).indexOf(weekDayName.toLowerCase());
      if (ret === -1) ret = cultureInfo['WW'].map(function (e) {
        return e.toLowerCase();
      }).indexOf(weekDayName.toLowerCase());
      if (ret === -1) throw new Error('Invalid weekDayName, not found ' + weekDayName);
      return ret;
    }
  }]);
  return DateTime;
}();
var Parser = /*#__PURE__*/function () {
  function Parser() {
    var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ko-KR';
    _classCallCheck(this, Parser);
    this.locale = locale;
    this.cultureInfo = IS_DIST ? JSON.parse(FileStream.read("/sdcard/msgbot/global_modules/datetime/globalization/".concat(locale, ".json"))) : require("./globalization/".concat(locale, ".json"));
    if (!this.cultureInfo) throw new Error('Invalid locale, not found ' + locale);
    this.replaces = this.cultureInfo.replaces;
    this.keywords = this.cultureInfo.keywords;
  }
  _createClass(Parser, [{
    key: "normalization",
    value: function normalization(dateString) {
      var ret = dateString.trim().replace(/\s+/g, ' ');
      var _iterator = _createForOfIteratorHelper(Parser.objectLoop(this.replaces)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          if (Parser.isRepeatObject(value)) {
            var i = new Parser.RepeatToken(key, value);
            if (i.key.test(ret)) ret = i.replace(ret);
          } else if (Parser.isContinueObject(value)) {
            var _i9 = new Parser.ContinueToken(key, value);
            if (_i9.key.test(ret)) ret = _i9.replace(ret);
          } else ret = ret.replaceAll(key, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return ret;
    }
  }, {
    key: "getTokensInNonSpace",
    value: function getTokensInNonSpace(dateString) {
      var startIdx = 0;
      var chucks = [];
      var found = false;
      var foundBefore = false;
      var dict = {};
      for (var keyword in this.keywords) {
        for (var key in this.keywords[keyword]) {
          if (key in dict) dict[key] = {
            meanings: [dict[key], this.keywords[keyword][key]]
          };else dict[key] = this.keywords[keyword][key];
        }
      }
      while (startIdx < dateString.length) {
        foundBefore = found;
        found = false;
        var _iterator2 = _createForOfIteratorHelper(Parser.objectLoop(dict)),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              _key = _step2$value[0],
              value = _step2$value[1];
            if (dateString.startsWith(_key, startIdx)) {
              if (chucks.length >= 1 && typeof chucks[chucks.length - 1] === 'number' && typeof value === 'number') {
                // 십이 -> [10, 2] -> 10+2
                // 이십 -> [2, 10] -> 2*10
                if (chucks[chucks.length - 1] > value) chucks[chucks.length - 1] += value;else chucks[chucks.length - 1] *= value;
              } else if (chucks.length >= 1 && Parser.isDiffObject(chucks[chucks.length - 1]) && Parser.isDiffObject(value)) {
                // 다음 내일 -> [{diff: 1}, {diff: 2}] -> {diff: 1+2}
                // 내일 다음 -> [{diff: 2}, {diff: 1}] -> {diff: 2+1}

                chucks[chucks.length - 1].diff += value.diff;
              } else if (Array.isArray(value)) chucks.push.apply(chucks, _toConsumableArray(value));else chucks.push(value);
              startIdx += _key.length;
              found = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (!found) {
          if (chucks.length === 0) chucks.push('');
          if (foundBefore) chucks.push(dateString[startIdx++]);else chucks[chucks.length - 1] += dateString[startIdx++];
        }
      }
      return chucks.map(function (e) {
        return Parser.isNumberRegex.test(e) ? parseFloat(e) : e;
      });
    }
  }, {
    key: "getTokens",
    value: function getTokens(dateString) {
      var notMerged = dateString.split(' ').map(this.getTokensInNonSpace);
      var tokens = [];

      /**
       * 공백이 없는 문자열에서의 토큰들끼리는 잘 merge 되었으나, 공백이 없는 문자열들끼리의 토큰들끼리의 merge를 처리해야함.
       * ex. 다음 다음다음 날 -> [다음, 다음다음, 날] -> [{diff: 1}, {diff: 2}, 'day'] -> [{diff: 1+2}, 'day']
       * 위의 예시에서 1+2를 하는 작업을 아래 코드에서 수행함.
       */
      while (notMerged.length > 0) {
        var value = notMerged.shift();
        if (tokens.length >= 1 && typeof tokens[tokens.length - 1] === 'number' && typeof value === 'number') {
          if (tokens[tokens.length - 1] > value) tokens[tokens.length - 1] += value;else tokens[tokens.length - 1] *= value;
        } else if (tokens.length >= 1 && Parser.isDiffObject(tokens[tokens.length - 1]) && Parser.isDiffObject(value)) {
          tokens[tokens.length - 1].diff += value.diff;
        } else if (Array.isArray(value)) tokens.push.apply(tokens, _toConsumableArray(value));else tokens.push(value);
      }
      return tokens;
    }
  }, {
    key: "parse_ISO",
    value: function parse_ISO(dateString) {
      var m = dateString.match( /*#__PURE__*/_wrapRegExp(/^(\d{4})\x2D(\d{2})\x2D(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?Z$/, {
        year: 1,
        month: 2,
        day: 3,
        hour: 4,
        minute: 5,
        second: 6,
        millisecond: 7
      }));
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
  }, {
    key: "parse_common",
    value: function parse_common(dateString) {
      var date = dateString.match( /*#__PURE__*/_wrapRegExp(/(?:(\d{4})[-.\/])? *(\d{1,2})[-.\/] *(\d{1,2})\.?/, {
        year: 1,
        month: 2,
        day: 3
      }));
      var time = dateString.match( /*#__PURE__*/_wrapRegExp(/(\d{1,2}) *: *(\d{1,2})(?: *: *(\d{1,2})(?:\.(\d{1,3}))?)?/, {
        hour: 1,
        minute: 2,
        second: 3,
        millisecond: 4
      }));
      if (date || time) {
        var _date$groups, _date$groups2, _date$groups3, _time$groups, _time$groups2, _time$groups3, _time$groups4;
        return {
          year: date === null || date === void 0 || (_date$groups = date.groups) === null || _date$groups === void 0 ? void 0 : _date$groups.year,
          month: date === null || date === void 0 || (_date$groups2 = date.groups) === null || _date$groups2 === void 0 ? void 0 : _date$groups2.month,
          day: date === null || date === void 0 || (_date$groups3 = date.groups) === null || _date$groups3 === void 0 ? void 0 : _date$groups3.day,
          hour: time === null || time === void 0 || (_time$groups = time.groups) === null || _time$groups === void 0 ? void 0 : _time$groups.hour,
          minute: time === null || time === void 0 || (_time$groups2 = time.groups) === null || _time$groups2 === void 0 ? void 0 : _time$groups2.minute,
          second: time === null || time === void 0 || (_time$groups3 = time.groups) === null || _time$groups3 === void 0 ? void 0 : _time$groups3.second,
          millisecond: time === null || time === void 0 || (_time$groups4 = time.groups) === null || _time$groups4 === void 0 ? void 0 : _time$groups4.millisecond
        };
      }
    }
  }, {
    key: "parse_absolute",
    value: function parse_absolute(dateString) {}
  }, {
    key: "parse_relative",
    value: function parse_relative(dateString) {}
  }, {
    key: "parse",
    value: function parse(dateString) {
      var _this$parse_ISO, _parsed2;
      dateString = this.normalization(dateString);
      var tokens = this.getTokens(dateString);
      var parsed = (_this$parse_ISO = this.parse_ISO(dateString)) !== null && _this$parse_ISO !== void 0 ? _this$parse_ISO : this.parse_common(dateString);
      (_parsed2 = parsed) !== null && _parsed2 !== void 0 ? _parsed2 : parsed = Object.assign(this.parse_absolute(dateString), this.parse_relative(dateString));
      if (parsed !== undefined) return parsed;else throw new Error('Invalid date string: ' + dateString);
    }
  }], [{
    key: "isContinueObject",
    value: function isContinueObject(obj) {
      return obj.constructor === Object && 'offset' in obj && typeof obj.offset === 'number' && 'tail' in obj && typeof obj.tail === 'string' && Object.keys(obj).length === 2;
    }
  }, {
    key: "isRepeatObject",
    value: function isRepeatObject(obj) {
      return obj.constructor === Object && 'repeat' in obj && typeof obj.repeat === 'string' && Object.keys(obj).length === 1;
    }
  }, {
    key: "isDiffObject",
    value: function isDiffObject(obj) {
      return obj.constructor === Object && 'diff' in obj && typeof obj.diff === 'number' && Object.keys(obj).length === 1;
    }
  }, {
    key: "isHomonymObject",
    value: function isHomonymObject(obj) {
      return obj.constructor === Object && 'meanings' in obj && Array.isArray(obj.meanings) && Object.keys(obj).length === 1;
    }
  }, {
    key: "objectLoop",
    value: function objectLoop(obj) {
      var keys = Object.keys(obj);

      // 키들의 길이로 정렬하기 때문에, '매주' 와 '주' 에서 '매주'에 먼저 매칭될 수 있게 함.
      // continue, repeat token들은 길이가 훨씬 길어질 수 있으므로(ex. 저저저저저저번) 가장 우선순위를 높임.
      keys.sort(function (a, b) {
        if (a.includes('+') && !b.includes('+')) return -1;
        if (!a.includes('+') && b.includes('+')) return 1;
        return a.length !== b.length ? b.length - a.length : a.localeCompare(b);
      });
      return keys.map(function (k) {
        return [k, obj[k]];
      });
    }
  }]);
  return Parser;
}();
/**
 * @param {string} string
 *
 *
 */
_Parser = Parser;
_defineProperty(Parser, "isNumberRegex", /^[+-]?\d+(?:\.\d*)?$/);
_defineProperty(Parser, "Token", /*#__PURE__*/function () {
  function _class(key, obj) {
    _classCallCheck(this, _class);
    this.key = new RegExp(key, 'g');
  }
  _createClass(_class, [{
    key: "replace",
    value: function replace(str) {
      return 'Not implemented';
    }
  }]);
  return _class;
}());
_defineProperty(Parser, "ContinueToken", /*#__PURE__*/function (_Parser$Token) {
  _inherits(_class2, _Parser$Token);
  function _class2(key, obj) {
    var _this2;
    _classCallCheck(this, _class2);
    if (!_Parser.isContinueObject(obj)) throw new Error();
    _this2 = _callSuper(this, _class2, [key, obj]);
    _this2.offset = obj.offset;
    _this2.tail = obj.tail;
    return _this2;
  }
  _createClass(_class2, [{
    key: "replace",
    value: function replace(str) {
      var _this3 = this;
      return str.replace(this.key, function (m, g) {
        return "".concat(_this3.offset + g.length).concat(_this3.tail);
      });
    }
  }]);
  return _class2;
}(_Parser.Token));
_defineProperty(Parser, "RepeatToken", /*#__PURE__*/function (_Parser$Token2) {
  _inherits(_class3, _Parser$Token2);
  function _class3(key, obj) {
    var _this4;
    _classCallCheck(this, _class3);
    if (!_Parser.isRepeatObject(obj)) throw new Error();
    _this4 = _callSuper(this, _class3, [key, obj]);
    _this4.repeat = obj.repeat;
    return _this4;
  }

  /**
   * @example (저+)번: 저저번 그래도 -> 저번 저번 그래도
   */
  _createClass(_class3, [{
    key: "replace",
    value: function replace(str) {
      var _this5 = this;
      return str.replace(this.key, function (m, g) {
        return Array(g.length).fill(_this5.repeat).join(' ');
      });
    }
  }]);
  return _class3;
}(_Parser.Token));
var _getToken = function _getToken(string) {};

/**
 * @param {string} dateString
 * @param {string} [locale='ko-KR']
 *
 *
 */
var _parse = function _parse(dateString) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ko-KR';
};
exports.DateTime = DateTime;
exports.Date = Date;
exports.Time = Time;
exports.Duration = Duration;
exports.Parser = Parser;
exports.$D = $D;