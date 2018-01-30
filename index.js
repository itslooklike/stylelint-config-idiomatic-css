var priority = require('./src/priority');
var positioning = require('./src/positioning');
var boxModel = require('./src/boxModel');
var flexbox = require('./src/flexbox');
var typography = require('./src/typography');
var other = require('./src/other');

var result = [...priority, ...positioning, ...boxModel, ...flexbox, ...typography, ...other];

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [result, { unspecified: 'bottomAlphabetical' }],
  },
};
