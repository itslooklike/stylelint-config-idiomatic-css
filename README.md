# stylelint-config-idiomatic-css

Stylelint config, for idiomatic css rules and
auto-sorting with prettier.

<img width="346" src="./screenshots/example.png">

## Quick start

1.  Install

```sh
npm i -D stylelint stylelint-config-idiomatic-css
```

2.  Create `.stylelintrc.js` in root project folder.

```js
module.exports = {
  extends: ['stylelint-config-idiomatic-css'],
}
```

3.  Install [VSCode plugin](https://github.com/shinnn/vscode-stylelint)

## Another config examples

### SCSS

```sh
npm i -D stylelint stylelint-config-standard stylelint-config-recommended-scss stylelint-config-idiomatic-css
```

```js
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-css',
  ],
}
```

### styled-components

Auto-sorting does`t work

```sh
npm i -D stylelint stylelint-processor-styled-components stylelint-config-standard stylelint-config-styled-components stylelint-config-idiomatic-css
```

```js
module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-idiomatic-css',
  ],
  syntax: 'scss',
}
```

For use it with `styled-components`, u need some vscode settings

```json
"stylelint.additionalDocumentSelectors": [
  "javascript"
],
```
