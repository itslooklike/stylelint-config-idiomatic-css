# stylelint-config-idiomatic-css

Stylelint config, for idiomatic css rules and
auto-sorting with prettier.

<img width="346" alt="HTML Academy" src="./screenshots/example.png">

## Quick start

1. Install

```
npm i -D stylelint stylelint-config-idiomatic-css
```

2. Create `.stylelintrc.js` in root project folder.

```
module.exports = {
  extends: [
    'stylelint-config-idiomatic-css',
  ],
};
```

3. Install [VSCode plugin](https://github.com/shinnn/vscode-stylelint)

## Another config examples

### SCSS

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

### Styled-components

Auto-sorting does`t work

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
};
```

For use it with styled-components, u need some vscode settings

```
"stylelint.additionalDocumentSelectors": [
  "javascript"
],
```
