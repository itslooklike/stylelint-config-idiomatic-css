const priority = require('./src/priority');
const positioning = require('./src/positioning');
const boxModel = require('./src/boxModel');
const backgrounds = require('./src/backgrounds');
const typography = require('./src/typography');

const result = [...priority, ...positioning, ...boxModel, ...backgrounds, ...typography];

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [result],
  },
};
