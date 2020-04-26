const priority = require('./priority')
const positioning = require('./positioning')
const boxModel = require('./boxModel')
const backgrounds = require('./backgrounds')
const typography = require('./typography')

const result = [...priority, ...positioning, ...boxModel, ...backgrounds, ...typography]

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [result],
  },
}
