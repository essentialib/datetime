const { DateTime } = require('../src');

const christmas = DateTime.fromString('2024-3-1T00:00:00.000Z');
console.log(christmas.humanize()); // "in 3 months"