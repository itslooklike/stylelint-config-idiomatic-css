// https://www.w3.org/TR/css-flexbox-1/
const FlexibleBoxLayoutModule = [
  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'flex-flow',
  'flex-wrap',
  'flex-direction',
  'order',
]

const gridParentRules = [
  'grid-template',
  'grid-template-columns',
  'grid-template-rows',
  'grid-template-areas',
  'grid-gap',
  'grid-column-gap',
  'grid-row-gap',
  'grid',
  'grid-auto-columns',
  'grid-auto-rows',
  'grid-auto-flow',
]

const gridChildrenRules = [
  'grid-area',
  'grid-column',
  'grid-row',
  'grid-column-start',
  'grid-column-end',
  'grid-row-start',
  'grid-row-end',
]

// https://www.w3.org/TR/css-grid-1/
const CSSGridLayoutModule = [...gridParentRules, ...gridChildrenRules]

// https://www.w3.org/TR/css-align-3/
const CSSBoxAlignmentModule = [
  'justify-items',
  'justify-content',
  'justify-self',
  'align-items',
  'align-content',
  'align-self',
]

const boxModel = [
  'display',
  ...CSSGridLayoutModule,
  ...FlexibleBoxLayoutModule,
  ...CSSBoxAlignmentModule,
  'overflow',
  'overflow-x',
  'overflow-y',
  'box-sizing',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-width',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
]

module.exports = boxModel
