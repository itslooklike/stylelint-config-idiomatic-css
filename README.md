# stylelint-config-idiomatic-css

stylelint config, for idiomatic order css sorting rules

## How install

```
npm i -D stylelint stylelint-config-idiomatic-css
```

## How to use

create `.stylelintrc.js` in root project folder

```
module.exports = {
  extends: [
    'stylelint-config-idiomatic-css',
  ],
};
```

With SCSS (format on safe is working)

```
npm i -D stylelint stylelint-config-standard stylelint-config-recommended-scss stylelint-config-idiomatic-css
```

```
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-css',
  ],
};
```

### Also u can use it with styled-components

```
npm i -D stylelint stylelint-processor-styled-components stylelint-config-standard stylelint-config-styled-components stylelint-config-idiomatic-css
```

```
module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-idiomatic-css',
  ],
  syntax: 'scss',
  rules: { 'declaration-empty-line-before': null, 'comment-empty-line-before': null },
};
```

For VSCode u need install `stylelint`

If u use it for styled-components, u need some settings

```
"stylelint.additionalDocumentSelectors": [
  "javascript"
],
```
