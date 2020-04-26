module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: { 'comma-dangle': 0 },
}
